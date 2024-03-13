function solucao(lista) {
    let soma = 0;
    for (let item of lista) {
        soma += item;
    }
    const media = soma / lista.length;
    return media;
}

const lista = [2, 3, 4];
const media = solucao(lista);
console.log(media);