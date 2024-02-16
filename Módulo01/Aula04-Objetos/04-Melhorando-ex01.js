//Melhorando o Exercício 01 utilizando TERNÁRIO
const pessoa = {
    nome: "Igor",
    idade: 31,
    temCNH: true,
    apelidos: ["Dodo", "Dinho", "Cabeça"]
}

//let textoCNH = condição ? valorVerdadeiro : valorFalso;
let textoCNH = pessoa.temCNH === true ? "posso CNH" : "não possuo CNH"

console.log(`Eu, ${pessoa.nome}, tenho ${pessoa.idade} anos, ${textoCNH}, e meus apelidos são: `);
for (let apelido of pessoa.apelidos) {
    console.log(`- ${apelido}`)
}