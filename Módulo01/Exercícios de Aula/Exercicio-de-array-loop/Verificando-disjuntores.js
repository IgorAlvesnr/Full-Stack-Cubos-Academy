const disjuntores = [false, false, true, false, false, true, false, false];

for (const [indice, estaLigado] of disjuntores.entries()) {
    if (estaLigado) {
        console.log(`Disjuntor ${indice} está ligado.`);
    }
}