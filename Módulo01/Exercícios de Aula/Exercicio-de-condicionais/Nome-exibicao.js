const pessoa = {
    nome: "Igor",
    sobrenome: "",
    apelido: "Dinho"
};

if (pessoa.apelido) {
    console.log(pessoa.apelido);
} else if (pessoa.sobrenome) {
    console.log(`${pessoa.nome} ${pessoa.sobrenome}`);
} else {
    console.log(pessoa.nome);
}
