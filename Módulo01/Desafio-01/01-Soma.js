function solucao(lista) {
    const todosNumeros = lista.every(item => typeof item === 'number');
    if (!todosNumeros) {
        return "Erro! Apenas números na lista.";
    }

    const soma = lista.reduce((total, numero) => total + numero, 0);
    return soma;
}

const lista = [1, 2, 3, 4];
const somaTotal = solucao(lista);
console.log(somaTotal);
