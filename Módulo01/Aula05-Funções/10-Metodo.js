function determinarFaixaEtaria(idade) {
    if (idade <= 21) {
        return "Jovem"
    } else if (idade < 66) {
        return "Adulto(a)"
    } else {
        return "Idoso(a)"
    }
}

const pessoa1 = {
    nome: "José",
    idade: 30,
    profissao: "professor",
    apresentar: function () {
        const faixaEtaria = determinarFaixaEtaria(this.idade);
        console.log(`Sou ${this.nome}, sou um(a) ${faixaEtaria} de ${this.idade} anos e sou ${this.profissao}.`)
    }
}

pessoa1.apresentar();