// transforme "josé messias junior" em "José Messias Junior"

const nome = "josé messias junior";
const arrayDeNomes = nome.split(" ");
console.log(arrayDeNomes);

let nomeFormatado = "";

for (let item of arrayDeNomes) {
    let primeiraLetra = item.slice(0, 1);
    let restanteDoNome = item.slice(1);

    nomeFormatado += primeiraLetra.toUpperCase() + restanteDoNome + " ";
}

console.log(nomeFormatado.trim())