function solucao(lista) {
    if (!lista || lista.length === 0) {
        return 0;
    }
    let soma = 0;
    for (let item of lista) {
        if (typeof item !== "number" || isNaN(item) || item <= 0 || !Number.isInteger(item)) {
            return "Erro: A lista deve conter apenas inteiros positivos.";
        }
        soma += item;
    }
    return soma;
}

const lista = [1, 2, 3, 4];
const resultado = solucao(lista);
console.log(resultado);


/*function solucao(lista) {
    let soma = 0;
    for (let item of lista) {
        soma += item;
    }
    return soma;
}

const lista = [1, 2, 3, 4];
const total = solucao(lista);
console.log(total);
*/
