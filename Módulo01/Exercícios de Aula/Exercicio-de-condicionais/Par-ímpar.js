const jogador1 = 1;
const jogador2 = 0;
const resultado1 = jogador1 + jogador2;
const resultado = (jogador1 + jogador2) % 2;

if (resultado === 0) {
    console.log(`Deu ${resultado1}, ganhou quem escolheu par.`);
} else {
    if (resultado > 0) {
        console.log(`Deu ${resultado1}, ganhou quem escolheu ímpar.`);
    }
}