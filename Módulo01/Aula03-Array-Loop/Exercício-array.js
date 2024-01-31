// crie uma lista de 5 países
const paises = ['Brasil', 'Argentina', 'Espanha', 'EUA', 'Chile']
console.log(paises);

// remova um pais do fim da lista

paises.pop();
console.log(paises);

//Adicione um país ao inicio da lista
paises.unshift('Chile')
console.log(paises)

//Remova um pais no ínicio da lista
paises.shift();
console.log(paises)

//Imprimir o ultimo ítem da lista
const ultimo = paises[paises.length - 1]
console.log(ultimo);

// Imprima o segundo pais da lista na tela
console.log(paises[1])

//imprima o pais de indice 2
console.log(paises[2])