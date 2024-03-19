function solucao(carta) {
    const cartasManilhas = {
        Q: "J",
        J: "K",
        K: "A",
        A: "2",
        2: "3",
        3: "Q"
    };
    return cartasManilhas[carta];
}
const cartaVirada = "Q";
const manilha = solucao(cartaVirada);

console.log(manilha);