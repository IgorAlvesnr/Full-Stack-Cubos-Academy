const letras = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"]
let quantidade = 0;

for (let letra of letras) {
    if (letra === "E" || letra === "e") {
        quantidade++;
    }
}

if (quantidade === 0) {
    console.log("Esse ARRAY não contém 'E' ou 'e'.")
} else {
    console.log(`Foram encontradas ${quantidade} letras "E" ou "e".`)
}