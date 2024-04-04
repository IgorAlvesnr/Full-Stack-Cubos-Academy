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


app.use(primeiroIntermediario);
app.use(segundoIntermediario);

app.get('/professores', filtrarProfessores);

app.get('/professores', encontrarUmProfessor);

app.listen(3000);
