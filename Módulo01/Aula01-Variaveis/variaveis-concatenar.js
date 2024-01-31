let nome = "Igor";
let sobrenome = "Alves";
let nomeCompleto = nome + sobrenome;//utiliza o "+" para concatenar
console.log(nomeCompleto); //Aparecerá IgorAlves tudo junto, pois quando concatena ele não reconhece o espaço.

nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto); //Agora aparecerá o nome com espaço por foi usado uma string de espaço entre os sinais de concatenar.

let produto = "Livro";
let preço = 50;
let mensagem = `O ${produto} custa R$ ${preço},00.`;
console.log(mensagem);

/* no segundo exemplo utilizasse o tamplates strings para concatenar e obrigatóriamente utilizasse o 
formado de crases(``).*/
