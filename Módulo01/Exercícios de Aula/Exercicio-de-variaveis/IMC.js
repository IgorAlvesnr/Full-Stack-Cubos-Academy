let nome = "Igor";
let altura = 1.77;
let peso = 93
let imc = (peso / (altura ** 2)).toFixed(2); //usei o toFixed(x) para limitar a quantidade de casas decimais.
console.log(`Olá ${nome}, seu IMC é ${imc}`);
