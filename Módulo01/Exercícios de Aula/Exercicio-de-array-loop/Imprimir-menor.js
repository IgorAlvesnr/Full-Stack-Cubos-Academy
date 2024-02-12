const arrayA = [5, 32, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13];

const arrayConcatenado = arrayA.concat(arrayB);
const menorNumero = Math.min(...arrayConcatenado);

console.log("O menor número dentre os dois ARRAY's é:", menorNumero)
