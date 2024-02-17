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
]

const usuariosComMaiorIdade = usuarios.map(usuario => ({
    ...usuario,
    maiorIdade: usuario.idade >= 18
}));

console.log(usuariosComMaiorIdade);
