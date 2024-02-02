const idade = 30;
const patologiaCardiaca = false;
const alturaEmCm = 177;
const estudante = false;

if (idade < 12 || idade > 65 && patologiaCardiaca === true && alturaEmCm < 150) {
    console.log('ACESSO NEGADO. Você não pode acessar ao parque.')
} else if (idade <= 18 || idade <= 65 && alturaEmCm >= 150 && estudante === true) {
    console.log('ACESSO LIBERADO. O valor para acessar ao parque é R$ 10,00 reais.')
} else {
    console.log('ACESSO LIBERADO. O valor para acessar ao parque é R$ 20,00 reais.')
}