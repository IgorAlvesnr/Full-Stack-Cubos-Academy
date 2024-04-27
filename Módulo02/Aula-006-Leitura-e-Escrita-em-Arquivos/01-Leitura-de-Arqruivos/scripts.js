const fs = require('fs');

console.log('antes de ler');

// Leitura de arquivos SINCRONO
//const a = fs.readFileSync('a.txt').toString();

//console.log(a);

//Leitura de arquivos ASSINCRONO
fs.readFile('a.txt', (erro, data) => {
    if (erro) {
        console.log(erro);
    } else {
        console.log(data.toString());
    }
});


console.log('depois de ler');