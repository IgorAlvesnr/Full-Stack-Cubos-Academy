const rendaMensal = 3000;
const valorCurso = 18000;
const percentualParcela = 0.18;
const duracaoContratoMeses = 60;

let valorParcela = 0;
let tempoDecorrido = 24;
let somaParcelas = 0;

if (tempoDecorrido <= duracaoContratoMeses && rendaMensal >= 2000) {
    valorParcela = rendaMensal * percentualParcela;
    somaParcelas = valorParcela * tempoDecorrido;
    tempoDecorrido++;
}

console.log(`a) O valor da sua parcela é R$ ${valorParcela.toFixed(2)}`);
console.log(`b) Tempo decorrido de contrato: ${tempoDecorrido} meses`);
console.log(`c) Soma das parcelas já pagas: R$ ${(somaParcelas).toFixed(2)}`);

if (somaParcelas === valorCurso * 100) {
    console.log("Parabéns! Você quitou a dívida. Não deve mais nada.");
}
