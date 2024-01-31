// menor de idade -> menor de idade
// maior de idade, mas menor ou igual a 65 -> Adulto
// acima de 65 -> idoso

const idade = 19;

if (idade < 18) {
    console.log("Menor de idade");
} else {// É possível retirar a chave após o else.
    if (idade <= 65) {
        console.log("Adulto");
    } else {
        console.log("Idoso")
    }
}