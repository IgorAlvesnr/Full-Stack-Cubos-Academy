const letras = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"]
let quantidade = 0;

for (let letra of letras) {
    if (letra === "E" || letra === "e") {
        quantidade++;
    }
}
console.log(quantidade);