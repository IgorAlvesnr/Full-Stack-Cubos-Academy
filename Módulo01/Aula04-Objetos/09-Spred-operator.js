// spred ... (espalhar)

const pessoa = {
    nome: "Igor",
    idade: 32,
    cidade: "Rio de Janeiro",
    profissao: "Dev"
};

const endereco = {
    rua: "Duarte Coelho",
    numero: 146,
    bairo: "Realengo"
};

const objetoFundido = {
    ...pessoa,
    ...endereco,
    CEP: 21730560
}

console.log(objetoFundido)