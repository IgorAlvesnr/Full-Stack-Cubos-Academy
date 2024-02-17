const curso = {
    id: 1234,
    nome: "Lógica de programação",
    aulas: [],
};

const aula = [{
    identificador: 1,
    nomeDaAula: "Lógica de Programação"
}, {
    identificador: 2,
    nomeDaAula: "Variáveis"
}, {
    identificador: 3,
    nomeDaAula: "Condicionais"
}, {
    identificador: 4,
    nomeDaAula: "Arrays"
}
];

aula.forEach(juntar => {
    curso.aulas.push(juntar)
});

console.log(curso)