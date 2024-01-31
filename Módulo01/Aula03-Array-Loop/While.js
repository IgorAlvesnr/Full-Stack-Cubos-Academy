// WHILE significa ENQUANTO

const nomesDeEstudantes = ['jose', 'joao', 'maria', 'joana', 'andre'];

let indice = 0;

//while (indice < 5) { essa linha faz a mesma coisa que a linha de baixo.
while (indice < nomesDeEstudantes.length) { // enquanto a variavel indice for menor que o ultimo item da lista ARRAY
    console.log(nomesDeEstudantes[indice]);
    indice++
}