function solucao(precos) {
    if (precos.length >= 3) {
        precos.sort((item1, item2) => item1 - item2);
        const desconto = precos[0] / 2;
        let total = precos.reduce((acumulado, itemAtual) => acumulado + itemAtual, 0) - desconto;
        console.log(total);
    } else {
        console.log(precos.reduce((acumulado, itemAtual) => acumulado + itemAtual, 0));
    }
}

const precos1 = [150, 50];
console.log(solucao(precos1));

const precos2 = [100, 100, 100];
console.log(solucao(precos2));

const precos3 = [200, 150, 50, 100];
console.log(solucao(precos3));