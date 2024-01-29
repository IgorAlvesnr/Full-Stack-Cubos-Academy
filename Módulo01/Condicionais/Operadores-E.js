const temIngresso = true;
const censura = 16;
const idade = 14;

if (temIngresso === true && idade >= censura) {
    console.log("Pode entrar.");
} else {
    console.log("Barrada.");
}

// Operador && todas as variáveis dentro dos parenteses terão que ser verdadeiras.