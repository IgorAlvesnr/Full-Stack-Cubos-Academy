const numero = 21;
const limiteInferior = 5;
const limiteSuperior = 20;

function verificarIntervalo(numero, limiteInferior, limiteSuperior) {
    if (numero >= limiteInferior && numero <= limiteSuperior) {
        return "PERTENCE"
    } else {
        return "N PERTENCE"
    }
}

const resultado = verificarIntervalo(numero, limiteInferior, limiteSuperior);
console.log(resultado);