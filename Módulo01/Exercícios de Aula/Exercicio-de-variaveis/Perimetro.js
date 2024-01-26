let ladoA = 2
let ladoB = 3
let ladoC = 4
let altura = 4
let raio = 2

let quadrado = altura ** 2;
let retangulo = ladoB * altura;
let triangulo = (ladoA * altura) / 2;
let losango = (ladoC * ladoA) / 2;
let trapezio = ((ladoC + ladoA) * altura) / 2;
let circulo = (2 * Math.PI * raio).toFixed(2);

console.log(`O perimetro do QUADRADO é ${quadrado}`);
console.log(`O perimetro do TRIANGULO é ${triangulo}`);
console.log(`O perimetro do RETANGULO é ${retangulo}`);
console.log(`O perimetro do LOSANGO é ${losango}`);
console.log(`O perimetro do TRAPÉZIO é ${trapezio}`);
console.log(`O perimetro do CÍRCULO é ${circulo}`);