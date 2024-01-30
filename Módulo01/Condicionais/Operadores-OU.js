// tem igresso
// tem idade maior ou igual a censura OU está com os pais.

const temIngresso = true;
const censura = 16;
const idade = 18;
const estaComOsPais = true;

if (temIngresso === true) {
    if (idade >= censura || estaComOsPais === true) {
        console.log("Pode entrar");
    } else {
        console.log("Barrada");
    }
} else {
    console.log("Barrada");
}

/* O operador ||(ou) não precisa necessariamente todas as variáveis dentro do parenteses serem verdadeiras.
retornará verdadeiro caso qualquer das expressões sejam verdadeiras.*/