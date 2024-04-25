const { getCityFromZipcode } = require('utils-playground');

/* PODE SER FEITO ASSIM

getCityFromZipcode('21730560').then((cidade)=>{
    console.log(cidade);
}).catch((erro)=>{
    console.log(erro);
})
*/

const cidade = getCityFromZipcode('21730560');

cidade.then((cidade) => {
    console.log(cidade);
})

cidade.catch((erro) => {
    console.log(erro.mensage)
})

console.log(cidade);