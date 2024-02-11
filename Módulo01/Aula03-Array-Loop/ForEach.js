/* O método .forEach() é uma função de array em JavaScript que executa uma determinada função uma vez para cada 
elemento em um array, em ordem, e não retorna nada (undefined). Aqui está uma explicação mais detalhada de como 
ele funciona:

1- Sintaxe:
Ex.: array.forEach(callback(currentValue, index, array));

2- Parametros:
-> callback: Uma função que é chamada para cada elemento do array. Ela recebe três argumentos:
-> currentValue: O valor atual sendo processado no array.
-> index (opcional): O índice do elemento atual no array.
-> array (opcional): O array ao qual o elemento pertence.

3- Funcionamento: 
-> Para cada elemento do array, a função de callback é executada uma vez.
-> A função de callback é chamada com três argumentos: o valor atual do elemento, o índice do elemento
e o array em si.
-> A função de callback é executada para cada elemento, na ordem do array.

4- Retorno:
-> O método .forEach() não retorna nada. Ele apenas executa a função de callback para cada elemento do array.

5- Comportamento:
-> O método .forEach() não altera o array original.
-> Ele é útil quando você precisa realizar uma ação para cada elemento do array, como imprimir cada elemento no 
console, realizar uma operação em cada elemento, ou executar uma função em cada elemento.

*/

const array = [1, 2, 3, 4, 5];

array.forEach(element => {
    console.log(element); // Imprime cada elemento do array
});
