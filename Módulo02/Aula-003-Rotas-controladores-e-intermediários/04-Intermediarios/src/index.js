const express = require('express');

const {
    filtrarProfessores,
    encontrarUmProfessor
} = require('./controladores/professores')

const app = express();

const primeiroIntermediario = (requisicao, resposta, next) => {
    console.log('Passei no primeiro intermediário');
    next();
};

const segundoIntermediario = (requisicao, resposta, next) => {
    console.log('Passei no segundo intermediário');
    next();
};

const intermediarioDaRota = (requisicao, resposta, next) => {
    console.log('passei no intermediario da rota');
    next();
}

app.use(primeiroIntermediario);
app.use(segundoIntermediario);

app.get('/professores', intermediarioDaRota, filtrarProfessores);

app.get('/professores/:id', encontrarUmProfessor);

app.listen(3000);
