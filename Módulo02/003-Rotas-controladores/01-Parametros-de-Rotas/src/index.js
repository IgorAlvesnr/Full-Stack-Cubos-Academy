const express = require('express');

const app = express();

const professores = [
    { id: 1, nome: 'Guido', stack: 'BackEnd' },
    { id: 2, nome: 'Dani', stack: 'FrontEnd' },
    { id: 3, nome: 'Diego', stack: 'FrontEnd' },
    { id: 4, nome: 'Vida', stack: 'BackEnd' }
]

// localhost:3000/professores
app.get('/professores', (requisicao, resposta) => {
    resposta.send(professores);
});

// localhost:3000/professores/NumeroDaID
app.get('/professores/:id', (requisicao, resposta) => {
    const professorEncontrado = professores.find((professor) => {
        return professor.id === Number(requisicao.params.id) //transfomando o params(parametro) em número pois ele é uma string
    })
    resposta.send(professorEncontrado);
});

// localhost:3000/professores/stack/NomeDaStack
app.get('/professores/stack/:stack', (requisicao, resposta) => {
    const professorEncontrado = professores.filter((professor) => {
        return professor.stack === requisicao.params.stack
    })
    resposta.send(professorEncontrado);
});
/* Em vez de usar find, que retorna apenas o primeiro professor encontrado, você pode usar filter, que retornará todos
os professores que correspondem à stack fornecida na URL. */


app.listen(3000);