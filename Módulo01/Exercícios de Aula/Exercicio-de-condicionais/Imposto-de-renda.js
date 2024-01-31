const aposentado = true;
const portadorDeDoenca = true;
const totalDeRendimentos = 30;

if (aposentado === true && portadorDeDoenca === true && totalDeRendimentos < 30) {
    console.log("VAZA LEÃO, já está difícil sem você.")
} else if (!aposentado && !portadorDeDoenca && totalDeRendimentos >= 30) {
    console.log("Declare seus rendimentos")
} else {
    console.log("ISENTA")
}