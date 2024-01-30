const saldo = 1;

/*if (saldo === 1) {
    console.log(`Você tem ${saldo} real`);
} else {
    console.log(`Você tem ${saldo} reais.`);
}
*/
const unidade = (saldo === 1 ? "real" : "reais")
console.log(`Você tem ${saldo} ${unidade}`)

/*RESUMINDO: TERNÁRIO se escreve: (condição ? expressão1 : expressão2)
Condição: É sempre uma expressão que será validade como verdadeiro ou falo.
Expressão 1 e 2: São expressões que contém valores de qualquer tipo, que SERÃO RETORNADAS
caso a condição seja verdadeira, expressão1 é retornado.
caso a condição seja falso, a expressão2 é retornado.

O TERNARIO basicamente substituí esse código IF.
 if (saldo === 1) {
    unidade = "real"
} else {
    unidade = "reais"
}*/