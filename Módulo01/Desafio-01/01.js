function solucao(lista) {
    let soma = 0;
    for (let item of lista) {
        soma += item;
    }
    return soma;
}
const lista = [1, 2, 3, 4];
const total = solucao(lista);
console.log(total);