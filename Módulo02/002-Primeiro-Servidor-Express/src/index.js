const express = require('express');

const app = express();

app.get('/home', (requisicao, resposta) => {
    resposta.send('Olá... Esse é o meu primeiro servidor com o express');
});

app.get('/', (requisicao, resposta) => {
    resposta.send('Essa é minha rota principal');
});

app.listen(3000);