function encontrarGoleiro(numerosJogados) {
    const S = numerosJogados.reduce((total, numero) => total + numero, 0); // Somando todos os números jogados
    const posicaoGoleiro = S % numerosJogados.length; // Encontrando a posição do goleiro usando o módulo

    // Se a posição for 0, o último jogador será o goleiro
    if (posicaoGoleiro === 0) {
        return {
            posicao: numerosJogados.length,
            indice: numerosJogados.length - 1 // Índice do último jogador no array
        };
    } else {
        return {
            posicao: posicaoGoleiro,
            indice: posicaoGoleiro - 1 // Índice do jogador correspondente no array
        };
    }
}

// Teste com os valores fornecidos
const numerosJogados = [1, 3, 2, 1]; // Exemplo de entrada
const goleiro = encontrarGoleiro(numerosJogados);
const totalJogadores = numerosJogados.reduce((total, numero) => { return total + numero; }, 0)
console.log("A soma total jogado pelos jogadores é: ", totalJogadores);
console.log("Posição do goleiro:", goleiro.posicao);
console.log("Índice do goleiro no array:", goleiro.indice);
