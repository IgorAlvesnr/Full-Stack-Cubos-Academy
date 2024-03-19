function solucao(jogadores) {
    let jogadoresZero = [];
    let jogadoresUm = [];
    for (const item of jogadores) {
        if (item.jogada === 0) {
            jogadoresZero.push(item.nome);
        } else if (item.jogada === 1) {
            jogadoresUm.push(item.nome);
        }
    }
    if (jogadoresZero.length === 1) {
        return jogadoresZero[0];
    } else if (jogadoresUm.length === 1) {
        return jogadoresUm[0];
    } else {
        return "NINGUEM"
    }

}
const jogadores = [
    { nome: "Herman", jogada: 1 },
    { nome: "Rhodes", jogada: 0 },
    { nome: "Beach", jogada: 0 },
    { nome: "Laurel", jogada: 0 },
    { nome: "Beatrice", jogada: 0 },
    { nome: "Alison", jogada: 0 },
    { nome: "Saundra", jogada: 0 },
    { nome: "Klein", jogada: 0 }
];
console.log(solucao(jogadores));