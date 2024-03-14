function encontrarGoleiro(numerosJogados) {
    const S = numerosJogados.reduce((total, numero) => total + numero, 0);
    const posicaoGoleiro = S % numerosJogados.length;
    if (posicaoGoleiro === 0) {
        return {
            posicao: numerosJogados.length,
            indice: numerosJogados.length - 1
        };
    } else {
        return {
            posicao: posicaoGoleiro,
            indice: posicaoGoleiro - 1
        };
    }
}

const numerosJogados = [1, 3, 2, 1];
const goleiro = encontrarGoleiro(numerosJogados);
const totalJogadores = numerosJogados.reduce((total, numero) => { return total + numero; }, 0);

console.log("A soma total jogado pelos jogadores é: ", totalJogadores);
console.log("Posição do goleiro:", goleiro.posicao);
console.log("Índice do goleiro no array:", goleiro.indice);
