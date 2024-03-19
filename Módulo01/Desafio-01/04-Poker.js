function solucao(min, max, valores) {
    let valoresPermitidos = [];
    for (const item of valores) {
        if (item >= min && item <= max) {
            valoresPermitidos.push(item)
        }
    }
    return valoresPermitidos;
}

const min1 = 2;
const max1 = 10;
const valores1 = [0, 5, 6, 10, 11];
const valoresAutorizados1 = solucao(min1, max1, valores1);

console.log(valoresAutorizados1);

const min2 = 1;
const max2 = 1;
const valores2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const valoresAutorizados2 = solucao(min2, max2, valores2);

console.log(valoresAutorizados2)