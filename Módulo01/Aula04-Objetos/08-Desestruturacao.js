const pessoa = {
    nome: "Igor",
    idade: 32,
    cidade: "Rio de Janeiro",
    profissao: "Dev"
};

// const nome = pessoa.nome;
// const idade = pessoa.idade;
// console.log(nome, idade);

const { nome, idade, ...outros } = pessoa;

console.log(nome, idade);
console.log(outros);

/*
A desestruturação é uma funcionalidade do JavaScript que permite extrair dados de arrays e objetos de forma mais concisa 
e conveniente. Com a desestruturação, você pode atribuir os valores de propriedades de um objeto a variáveis individuais,
facilitando o acesso a esses valores. Além disso, a desestruturação também pode ser utilizada para acessar o restante 
das propriedades em outra variável, utilizando o spread operator (...). 
Essa funcionalidade é útil para lidar com objetos grandes e simplificar a manipulação de dados em objetos e arrays de 
forma mais eficiente.
*/