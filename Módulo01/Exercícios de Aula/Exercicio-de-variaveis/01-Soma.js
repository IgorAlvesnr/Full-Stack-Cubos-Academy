function somarArray(array) {
    let soma = 0;
    for (let elemento of array) {
        soma += elemento;
    }
    return soma;
}

const array = [1, 2, 3, 4];
const resultado = somarArray(array);
console.log("A soma dos elementos do array é:", resultado);
