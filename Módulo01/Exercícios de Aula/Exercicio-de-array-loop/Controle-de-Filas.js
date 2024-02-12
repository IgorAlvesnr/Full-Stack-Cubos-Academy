const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];


while (filaDeFora.length > 0 && filaDeDentro.length < 5) {
    const pessoa = filaDeFora.shift();
    filaDeDentro.push(pessoa);
}

console.log("Fila de Dentro:", filaDeDentro);