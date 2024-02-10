const numeros = [54, 22, 10, 14, 87, 284];
let quantidade = 0;
console.log(`Esse é um ARRAY de tamanho ${numeros.length}`);

let indice = 0;
let indiceDoNumero10 = -1;

for (let numero of numeros) {
    if (numero === 10) {
        quantidade++
        indiceDoNumero10 = indice;
    }
    indice++
}
if (quantidade === 1) {
    console.log(`A quantidade de vezes que o número 10 apareceu neste ARRAY foi: ${quantidade} vez.`);
    console.log(`O número 10 está no índice ${indiceDoNumero10}.`)
} else if (quantidade >= 1) {
    console.log(`A quantidade de vezes que o número 10 apareceu neste ARRAY foram: ${quantidade} vezes.`);
    console.log(`O número 10 está no índice ${indiceDoNumero10}.`)
} else {
    console.log(`Esse ARRAY não contém o número 10.`);
}