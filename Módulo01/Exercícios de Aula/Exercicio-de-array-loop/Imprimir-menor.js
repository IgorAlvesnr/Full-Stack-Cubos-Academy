const arrayA = [5, 32, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13];

const novoArray = arrayA.concat(arrayB);
const menorNumero = Math.min(...novoArray);

console.log("O menor número dentre os dois ARRAY's é:", menorNumero)
