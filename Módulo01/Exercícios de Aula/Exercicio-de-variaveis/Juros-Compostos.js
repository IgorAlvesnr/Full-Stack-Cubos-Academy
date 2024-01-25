/*Aplicando R$ 500.000 hoje em um CDB com uma taxa de 10% ao ano, mostre para mim quantos reais terá 
aplicado ao final de 3 anos. */

let capital = 500_000;
let taxa = 10; // A variável taxa tem que estar obrigatóriamente na mesma unidade da variável tempo (dia,mês e ano).
let tempo = 3;
let montante = (capital * (1 + taxa / 100) ** tempo).toFixed(2);
console.log(`Você terá aplicado no final de ${tempo} anos o valor de R$ ${montante}.`);