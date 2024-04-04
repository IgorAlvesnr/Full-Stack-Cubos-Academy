const professores = require('../bancodedados');

const filtrarProfessores = (requisicao, resposta) => {
    const { stack } = requisicao.query
    let resultado = professores

    if (requisicao.query.stack) {
        resultado = professores.filter((professor) => {
            return professor.stack === stack
        })
    }

    resposta.send(resultado);
}

const encontrarUmProfessor = (requisicao, resposta) => {
    const professorEncontrado = professores.find((professor) => {
        return professor.id === Number(requisicao.params.id)
    })
    resposta.send(professorEncontrado);
}

module.exports = {
    filtrarProfessores,
    encontrarUmProfessor
}