/*O método .find() é uma função de array em JavaScript que retorna o valor do primeiro elemento no array que 
satisfaz uma condição especificada na forma de uma função de callback. Aqui está uma explicação mais detalhada 
de como ele funciona:

1- Sintaxe:
Ex.: const resultado = array.find(callback(elemento, index, array));

2- Parâmetros:
-> callback: Uma função que é chamada para cada elemento do array até que um elemento seja encontrado que satisfaça 
a condição. Ela recebe três argumentos:
-> elemento: O elemento atual sendo processado no array.
-> index (opcional): O índice do elemento atual no array.
-> array (opcional): O array ao qual o elemento pertence.

3- Funcionamento: 
-> Para cada elemento do array, a função de callback é chamada uma vez.
-> A função de callback é chamada com três argumentos: o valor atual do elemento, o índice do elemento e o array 
em si.
-> A função de callback retorna true se a condição for satisfeita para o elemento atual, e false caso contrário.
-> O método .find() retorna o valor do primeiro elemento do array para o qual a função de callback retorna true.

4- Retorno:
-> O método .find() retorna o valor do primeiro elemento do array que satisfaz a condição especificada pela função 
de callback. Se nenhum elemento satisfizer a condição, o método retorna undefined.

5- Comportamento:
-> O método .find() para de iterar sobre os elementos do array assim que um elemento satisfizer a condição especificada.
-> Ele não altera o array original.
-> É útil quando você precisa encontrar o primeiro elemento que satisfaz uma determinada condição em um array.

*/
const numeros = [1, 3, 5, 8, 7, 10];

const primeiroNumeroPar = numeros.find(elemento => {
    return elemento % 2 === 0; // Retorna true se o elemento for par
});

console.log(primeiroNumeroPar); // Imprime o primeiro número par encontrado (8)
