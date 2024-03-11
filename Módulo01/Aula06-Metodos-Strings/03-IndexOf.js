// saber se um email é valido
// tem que ter pelo menos um @
// tem que ter pelo menos um . depois do @

const possivelEmail = "jose@cubos.academy";

const indexArroba = possivelEmail.indexOf("@"); //4

const indexPontoAposArroba = possivelEmail.indexOf(".", indexArroba);

if (indexPontoAposArroba > indexArroba) {
    console.log("Email atende as requisições");
} else {
    console.log("Não atende as requisições.")
}
/*
Uso do método indexOf para encontrar a posição de um texto dentro de outro texto
Retorno do método indexOf: índice da primeira ocorrência do texto ou -1 se não encontrado
Exemplos de uso do método indexOf
Uso do parâmetro opcional fromIndex para indicar a posição inicial da busca
Exemplos de uso do método indexOf com fromIndex
Aplicação prática: validação de e-mails utilizando o método indexOf para verificar a presença de "@" e um ponto posterior
 */