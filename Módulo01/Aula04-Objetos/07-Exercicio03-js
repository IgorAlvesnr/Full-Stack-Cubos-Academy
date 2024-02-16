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

let totalAPagar = 0;

for (let produto of produtos) {
    totalAPagar += produto.precoUnitario * produto.quantidade;
}
const totalFormatado = (totalAPagar / 100).toFixed(2);

console.log(`Sr(a) ${cartao.nome}, o total a pagar é R$ ${totalFormatado}`);