const pessoa = {
    nome: 'Jose',
    altura: 1.77,
    peso: 98
}
console.log(pessoa);

pessoa.nome = "Igor"
pessoa['altura'] = 1.80

console.log(pessoa.nome);
console.log(`Meu nome é ${pessoa.nome}, tenho ${pessoa.altura} m e estou pesando ${pessoa.peso}Kg.`)

/* Na Aula "Criando e manipulando Objetos" foram abordados os seguintes tópicos:

1. Criação de um objeto em JavaScript usando chaves "{}" e a representação das propriedades e valores dentro do objeto.
2. Explicação de como as propriedades de um objeto funcionam, destacando que são separadas por vírgulas e podem 
armazenar diferentes tipos de dados, como strings, números e outros.
3.Utilização da notação de ponto (objeto.propriedade) para acessar o valor de uma propriedade específica do objeto.
4.Foi abordada a manipulação de objetos em JavaScript, enfatizando o uso da notação de colchetes para acessar 
propriedades de um objeto. Foi destacado que essa notação funciona de forma equivalente à notação de ponto, 
permitindo que as propriedades sejam acessadas e modificadas da mesma maneira.
5.Demonstração do uso de template string (uso de crases) para facilitar a concatenação de valores das propriedades 
com outras strings.
6.Esclarecimento de que, apesar de ser uma constante (const), é possível modificar o conteúdo das propriedades 
do objeto.
7.Diferença entre modificar uma propriedade do objeto e atribuir um novo objeto à variável, ressaltando que a 
reatribuição do objeto não é permitida quando declarado com const. Caso fosse uma variável let seria possível 
alterar.

Esses conceitos são fundamentais para compreender a manipulação e utilização de objetos em JavaScript, 
permitindo a criação e modificação de objetos de forma eficiente e dinâmica. */