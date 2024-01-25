// Escolha os pontos A e B conforme o plano cartesiano pede. Onde ponto A=(xa, ya) e o ponto B=(xb, yb)?
let xa = 6;
let xb = 3;
let pontoA = xa - xb;
console.log(`O ponto A tem valor ${pontoA}`);

let ya = 0;
let yb = -4;
let pontoB = ya - yb;
console.log(`O ponto B tem valor ${pontoB}`);

let resultado = Math.sqrt((pontoA) ** 2 + (pontoB) ** 2)

console.log(`A ditancia entre os dois pontos é ${resultado}`);