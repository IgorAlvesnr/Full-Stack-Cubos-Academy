function mediaAritmetica(notas) {
    let soma = 0;
    for (let item of notas) {
        soma += item;
    }
    const media = soma / notas.length;
    return media;
}

const notas = [2, 3, 4];
const media = mediaAritmetica(notas);
console.log(media);