let jogador1 = "papel";
let jogador2 = "tesoura";
console.log(`O jogador 1 escolheu ${jogador1}`);
console.log(`O jogador 2 escolheu ${jogador2}`);

if (jogador1 === jogador2) {
    console.log("EMPATE!")
} else
    if
        ((jogador1 === "pedra" && jogador2 === "tesoura") ||
        (jogador1 === "papel" && jogador2 === "pedra") ||
        (jogador1 === "tesoura" && jogador2 === "papel")) {
        console.log("O jogador 1 venceu")
    }
    else {
        console.log("O Jogador 2 venceu")
    }
