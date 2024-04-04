const express = require('express');

const app = express();

const professores = [
    { id: 1, nome: 'Guido', stack: 'BackEnd' },
    { id: 2, nome: 'Dani', stack: 'FrontEnd' },
    { id: 3, nome: 'Diego', stack: 'FrontEnd' },
    { id: 4, nome: 'Vidal', stack: 'BackEnd' }
]

// localhost:3000/professores?stack=BackEnd
app.get('/professores', (requisicao, resposta) => {
    const { stack } = requisicao.query
    let resultado = professores

    if (requisicao.query.stack) {
        resultado = professores.filter((professor) => {
            return professor.stack === stack
        })
    }

    resposta.send(resultado);
})

// localhost:3000/professores/NumeroDaID
app.get('/professores/:id', (requisicao, resposta) => {
    const professorEncontrado = professores.find((professor) => {
        return professor.id === Number(requisicao.params.id) //transfomando o params(parametro) em número pois ele é uma string
    })
    resposta.send(professorEncontrado);
})

app.listen(3000);
