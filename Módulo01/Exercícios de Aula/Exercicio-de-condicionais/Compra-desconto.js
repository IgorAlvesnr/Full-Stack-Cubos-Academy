const credito = 0.95;
const cheque = 0.97;
const debitoDinheiro = 0.9;
const valorProduto = 100
let resultado = debitoDinheiro

if (resultado === credito) {
    resultado = valorProduto * credito;
    console.log(`O valor do produto é R$ ${resultado} reais, por conta do acrescimo na modalidade CRÉDITO`);
} else if (resultado === cheque) {
    resultado = valorProduto * cheque;
    console.log(`O valor do produto é R$ ${resultado} reais, por conta do acrescimo na modalidade CHEQUE`)
} else {
    resultado = valorProduto * debitoDinheiro;
    console.log(`O valor do produto é R$ ${resultado} reais, por conta do acrescimo na modalidade DÉBITO/DINHEIRO`)
}