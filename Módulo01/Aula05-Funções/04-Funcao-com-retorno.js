function verificarMaiorIdade(idade) {
    if (idade >= 18) {
        return true;    //tudo que colocar após o return não funcionará
        console.log("Essa linha não vai ser executada");
    } else {
        return false;
    }
}

const valorRetornadoPelaFuncao = verificarMaiorIdade(20);
console.log(valorRetornadoPelaFuncao)