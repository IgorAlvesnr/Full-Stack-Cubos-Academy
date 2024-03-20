function solucao(texto) {
    texto = texto.trim();
    const palavras = texto.split(/\s+/)
    console.log(palavras.length);
}
const texto1 = "Um texto qualquer";
console.log(solucao(texto1));

const texto2 = "Cuidado, pois usuarios as vezes deixam espacos vazios no fim dos textos sem querer ";
console.log(solucao(texto2))