function verificarIntervalo(numero, limiteInferior, limiteSuperior) {
    if (numero >= limiteInferior && numero <= limiteSuperior) {
        return "PERTENCE"
    } else {
        return "N PERTENCE"
    }
}

const numero = 10;
const limiteInferior = 5;
const limiteSuperior = 20;


const resultado = verificarIntervalo(numero, limiteInferior, limiteSuperior);
console.log(resultado);