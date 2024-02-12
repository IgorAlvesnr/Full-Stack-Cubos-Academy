const nomes = ["Ana", "Joana", "Carlos", "amanda"];

const nomesComA = nomes.filter(nome => {
    return nome.toUpperCase().startsWith("A");
})

console.log("Aqui estão os nomes que começam com a letra 'A':", nomesComA);