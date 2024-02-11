const numeros = [1, 4, 12, 21, 53, 88, 112];

const pares = numeros.filter((value) => {
    return value % 2 === 0;
})
console.log("Este ARRAY é só de números pares:", pares);