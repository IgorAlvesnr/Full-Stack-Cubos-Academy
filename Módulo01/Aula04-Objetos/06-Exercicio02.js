const produtos = [
    {
        nome: "Pão de alho",
        precoUnitario: 1500,
        quantidade: 3
    }, {
        nome: "Cerveja",
        precoUnitario: 1000,
        quantidade: 2
    }, {
        nome: "Água",
        precoUnitario: 500,
        quantidade: 1
    }
]

const cartao = {
    nome: "Igor Alves",
    idade: 31,
    produtos
};

console.log(cartao);
console.log(cartao.nome);
console.log(cartao.idade);

cartao.idade = 32;

console.log(cartao.idade);
console.log(cartao.produtos[0].nome)
console.log(cartao.produtos[produtos.length - 1].precoUnitario)

/* 
OUTRA MANEIRA DE IMPRIMIR O NOME DO PRIMEIRO PRODUTO E O PREÇO DO ÚLTIMO PRODUTO

const primeiroProduto = produtos[0];
const nomeDoPrimeiroProduto = primeiroProduto.nome;

const ultimoProduto = produtos[produtos.length - 1];
const precoUnitarioUltimoProduto = ultimoProduto.precoUnitario;

console.log(nomeDoPrimeiroProduto);
console.log(precoUnitarioUltimoProduto);

*/ 