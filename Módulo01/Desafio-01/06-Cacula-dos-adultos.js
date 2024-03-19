function solucao(idade) {
    let idadeMinima = 100;
    for (let item of idade) {
        if (item >= 18 && item < idadeMinima) {
            idadeMinima = item;
        }
    }
    if (idadeMinima === 100) {
        console.log("CRESCA E APARECA");
    } else {
        console.log(idadeMinima);
    }
}

const idade = [12, 18, 27];
solucao(idade);