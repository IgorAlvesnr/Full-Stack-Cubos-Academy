function determinarFaixaEtaria(idade) {
    if (idade <= 21) {
        return "Jovem"
    } else if (idade < 66) {
        return "Adulto(a)"
    } else {
        return "Idoso(a)"
    }
}

//Não é necessário guardar dentro de uma constante o resultado.
//const valorRetornadoPelaFuncao = determinarFaixaEtaria(66);
//console.log(valorRetornadoPelaFuncao);  

console.log(determinarFaixaEtaria(32))