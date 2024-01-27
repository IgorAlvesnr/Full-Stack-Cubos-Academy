/*Digamos que você invista R$ 10 mil durante o prazo de 2 anos, com um rendimento de 21%. 
No mesmo período, a inflação foi de 8,5%. Dessa forma, temos:*/

let capital = 10000;
let taxaNominal = 21 / 100;
let taxaJuros = 8.5 / 100;
let tempo = 2;


let jurosReal = (((1 + taxaNominal) / (1 + taxaJuros) - 1) * 100).toFixed(1);
console.log(`A taxa de juros real do investimento foi de ${jurosReal}`);