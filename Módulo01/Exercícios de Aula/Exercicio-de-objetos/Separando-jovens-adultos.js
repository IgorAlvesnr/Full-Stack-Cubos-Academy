const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
];

const Adultos = usuarios.filter(adulto => adulto.idade >= 18);
const Jovens = usuarios.filter(jovem => jovem.idade < 18);

Adultos.forEach(adulto => console.log(adulto.nome));
Jovens.forEach(jovem => console.log(jovem.nome));