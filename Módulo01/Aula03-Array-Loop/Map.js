/*O método .map() é uma função de array em JavaScript que cria um novo array com os resultados de chamar uma 
função fornecida em cada elemento do array original. Aqui está uma explicação mais detalhada de como ele funciona:

1-Sintaxe:
Ex.: const novoArray = array.map(callback(currentValue, index, array));

2- Parâmetros: 
-> callback: Uma função que é chamada para cada elemento do array. Ela recebe três argumentos:
-> currentValue: O valor atual sendo processado no array.
-> index (opcional): O índice do elemento atual no array.
-> array (opcional): O array ao qual o elemento pertence.

3- Funcionamento: 
-> Para cada elemento do array, a função de callback é chamada uma vez.
-> A função de callback é chamada com três argumentos: o valor atual do elemento, o índice do elemento e o array em si.
-> A função de callback retorna um novo valor para o elemento atual.
-> O método .map() cria um novo array contendo os valores retornados pela função de callback para cada elemento do 
array original.

4 - Retorno:
-> O método .map() retorna um novo array contendo os resultados da chamada da função de callback para cada elemento 
do array original.

5- Comportamento: 
-> O método .map() não altera o array original.
-> Ele é útil quando você precisa transformar os elementos de um array de alguma forma, criando um novo array com os 
resultados dessa transformação.
*/
const array = [1, 2, 3, 4, 5];

const novoArray = array.map(element => {
    return element * 2; // Multiplica cada elemento por 2
});

console.log(novoArray); // Imprime o novo array [2, 4, 6, 8, 10]
