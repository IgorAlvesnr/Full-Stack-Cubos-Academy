const pessoaObj = {
    nome: "João",
    idade: 12,
    altura: 1.4,
    profissao: "estudante"
}

function apresentar(pessoa) {
    console.log(`Olá! Sou ${pessoaObj.nome}, sou um jovem de ${pessoaObj.idade} anos, tenho ${pessoaObj.altura}m e sou ${pessoaObj.profissao}.`)
}

apresentar(pessoaObj)