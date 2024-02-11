/*O método .reduce() é uma função de array em JavaScript que permite reduzir um array a um único valor. Ele executa 
uma função de callback em cada elemento do array, resultando em um único valor de retorno. Aqui está uma explicação 
detalhada de como ele funciona:

1- Sintaxe:
Ex.: array.reduce(callback(acumulador, elemento, índice, array), valorInicial);

2- Parâmetros: 
-> callback: Uma função que é executada em cada elemento do array, recebendo quatro argumentos:
-> acumulador: O valor acumulado retornado nas iterações anteriores ou o valor inicial, se fornecido.
-> elemento: O elemento atual sendo processado no array.
-> índice (opcional): O índice do elemento atual no array.
-> array (opcional): O array ao qual o elemento pertence.
-> valorInicial (opcional): Um valor inicial a ser usado como primeiro argumento na primeira chamada da função de callback. 
Se não fornecido, o primeiro elemento do array será usado como valor inicial e a primeira chamada da função de callback 
ocorrerá no segundo elemento.

3- Funcionamento: 
-> Para cada elemento do array, a função de callback é chamada.
-> A função de callback recebe o valor acumulado (ou o valor inicial na primeira chamada), o elemento atual, o 
índice do elemento atual e o array.
-> O valor retornado pela função de callback é atribuído ao acumulador para a próxima iteração.
-> Na última iteração, o valor retornado pela última chamada da função de callback é retornado como resultado final.

4- Retorno:
-> O método .reduce() retorna o valor acumulado final após a última iteração.

5- Comportamento:
-> O método .reduce() pode ser usado para realizar várias operações de redução em arrays, como soma, multiplicação, 
concatenação, entre outras.
-> Ele pode ser útil para transformar um array em um único valor agregado, como a soma de todos os elementos, o produto 
dos elementos, ou mesmo uma string concatenada.
-> É importante fornecer um valor inicial se você estiver realizando operações que requerem um estado inicial específico.

*/
const numeros = [1, 2, 3, 4, 5];

const soma = numeros.reduce((acumulador, numero) => {
    return acumulador + numero;
}, 0); //Usou o 0 como valor inicial, haja vista que o index de uma array começa com 0.

console.log(soma); // Imprime a soma de todos os números do array (15)
