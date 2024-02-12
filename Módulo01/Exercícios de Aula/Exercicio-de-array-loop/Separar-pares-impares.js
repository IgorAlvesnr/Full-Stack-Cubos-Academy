const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = original.filter(numero => {
    return numero % 2 === 0;
})
console.log("Este ARRAY é só de números pares:", pares);

const impares = original.filter(numero => {
    return numero % 2 !== 0;
})
console.log("Este ARRAY é só de números impares:", impares);