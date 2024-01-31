const nomeDeEstudantes = ['jose', 'joão', 'maria', 'joana', 'andre'];

console.log(nomeDeEstudantes); //Todos os nomes
console.log(nomeDeEstudantes[0]);//jose
console.log(nomeDeEstudantes[1]);//joão
console.log(nomeDeEstudantes[2]);//maria
console.log(nomeDeEstudantes[3]);//joana
console.log(nomeDeEstudantes[4]);//andre
console.log(nomeDeEstudantes[5]);//undefined pq não tem nome no index 5.

//Para MUDAR algum nome que está dentro do ARRAY é só utilizar o exemplo abaixo
nomeDeEstudantes[0] = 'Igor';
console.log(nomeDeEstudantes);
//o numero dentro dos colchetes[ ], escolhe a posição da alteração.

const x = 3;
nomeDeEstudantes[x] = 'Andreia';
console.log(nomeDeEstudantes);