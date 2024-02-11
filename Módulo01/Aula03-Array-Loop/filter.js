/* O método .filter() é uma função de array em JavaScript que cria um novo array com todos os elementos que passam 
por um teste especificado em uma função de callback. Aqui está uma explicação mais detalhada de como ele funciona: 

1- Sintaxe:
EX.: const novoArray = array.filter(callback(elemento, índice, array));

2- Parametros:
-> callback: Uma função que é chamada para cada elemento do array. Ela recebe três argumentos:
-> elemento: O elemento atual sendo processado no array.
-> índice (opcional): O índice do elemento atual no array.
-> array (opcional): O array ao qual o elemento pertence.
-> novoArray: Um novo array que contém os elementos que passaram no teste.

3- Funcionamento: 
-> Para cada elemento do array, a função de callback é executada.
-> Se a função de callback retorna true para um elemento específico, esse elemento é adicionado ao novo array.
-> Se a função de callback retorna false para um elemento específico, esse elemento é excluído do novo array.

4- Retorno:
-> O método .filter() retorna um novo array contendo os elementos que passaram no teste especificado pela
função de callback.
*/
const produtos = [
    { id: 1, nome: 'Camiseta', quantidade: 5 },
    { id: 2, nome: 'Calça', quantidade: 0 },
    { id: 3, nome: 'Tênis', quantidade: 10 },
    { id: 4, nome: 'Moletom', quantidade: 2 },
    { id: 5, nome: 'Boné', quantidade: 0 }
];

const produtosEmEstoque = produtos.filter(produto => {
    return produto.quantidade > 0; // Retorna true se a quantidade for maior que zero
});

console.log(produtosEmEstoque);
