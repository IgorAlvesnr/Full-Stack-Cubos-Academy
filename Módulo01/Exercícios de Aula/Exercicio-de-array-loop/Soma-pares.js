const numeros = [3, 4, 7, 8, 1, 6, 5, 10];
let soma = 0;

const pares = numeros.filter(value => {
    return value % 2 === 0;
});

for (const numero of pares) {
    soma += numero;
}
console.log("A soma de todos os números PARES do array é:", soma);