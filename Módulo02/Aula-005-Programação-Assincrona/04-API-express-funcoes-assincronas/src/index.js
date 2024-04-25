const express = require('express');
const { getCityFromZipcode } = require('utils-playground')

const app = express();

app.get('/', async (req, res) => {
    const cidade = getCityFromZipcode('21730560');
    const cidade2 = getCityFromZipcode('41256250');

    const promise = await Promise.all([cidade, cidade2]); // promise all resolve todas as promessa de uma vez só

    // console.log(promise);

    const [resposta1, resposta2] = promise;

    res.send(`A cidade encontrada foi: ${resposta1} e ${resposta2}.`);
});

app.listen(3000);