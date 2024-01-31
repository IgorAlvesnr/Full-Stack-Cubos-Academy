const ladoA = 2;
const ladoB = 2;
const resultado = ((ladoA + ladoB) / 2);

if (resultado == 0) {
    console.log("Essa pedra é um BRANCO")
} else if (resultado == 1) {
    console.log("Essa pedra é um ÁS")
} else if (resultado == 2) {
    console.log("Essa pedra é um DUQUE")
} else if (resultado == 3) {
    console.log("Essa pedra é um TERNO")
} else if (resultado == 4) {
    console.log("Essa pedra é uma QUADRA")
} else if (resultado == 5) {
    console.log("Essa pedra é uma QUINA")
} else if (resultado == 6) {
    console.log("Essa pedra é uma SENA")
} else {
    console.log("Essa pedra é invalida")
}