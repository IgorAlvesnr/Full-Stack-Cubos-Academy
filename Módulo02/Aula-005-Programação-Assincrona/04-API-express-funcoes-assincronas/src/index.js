const express = require('express');
const { getCityFromZipcode } = require('utils-playground')

const app = express();

app.get('/', async (req, res) => {
    const cidade = await getCityFromZipcode('21730560');
    res.send(`A cidade encontrada foi: ${cidade}`);
});

app.listen(3000);