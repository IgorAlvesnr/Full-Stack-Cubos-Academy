function determinarFaixaEtaria(idade) {
    if (idade <= 21) {
        return "Jovem"
    } else if (idade < 66) {
        return "Adulto(a)"
    } else {
        return "Idoso(a)"
    }
}

function apresentar(pessoa) {
    const faixaEtaria = determinarFaixaEtaria(pessoa.idade);
    console.log(`Sou ${pessoa.nome}, sou um(a) ${faixaEtaria} de ${pessoa.idade} anos e sou ${pessoa.profissao}.`)
}

const pessoa1 = {
    nome: "José",
    idade: 30,
    profissao: "professor"
}
apresentar(pessoa1);