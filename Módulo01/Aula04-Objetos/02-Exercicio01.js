const pessoa = {
    nome: "Igor",
    idade: 31,
    temCNH: true,
    apelidos: ["Dodo", "Dinho"]
}

let textoCNH = "";
if (pessoa.temCNH === true) {
    textoCNH = "possui CNH";
} else {
    textoCNH = "não possui CNH";
}


console.log(`Eu ${pessoa.nome} tenho ${pessoa.idade} anos, ${textoCNH}, e meus apelidos são:
- ${pessoa.apelidos[0]}
- ${pessoa.apelidos[1]} `);