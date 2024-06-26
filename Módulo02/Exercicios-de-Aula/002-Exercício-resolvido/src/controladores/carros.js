const carros = require('../bancodedados');

const listagemCarros = (req, res) => {
    const { marca, cor } = req.query;
    let resultado = carros;

    if (marca) {
        resultado = resultado.filter(() => {
            return carros.marca === marca;
        })
    }

    if (cor) {
        resultado = resultado.filter(() => {
            return carros.cor === cor;
        })
    }

    res.send(resultado);
}

const obterCarro = (req, res) => {
    const { id } = req.params;

    const carroEncontrado = carros.find((carro) => {
        return carro.id === Number(id);
    })

    res.send(carroEncontrado);
}

module.exports = {
    listagemCarros,
    obterCarro
}