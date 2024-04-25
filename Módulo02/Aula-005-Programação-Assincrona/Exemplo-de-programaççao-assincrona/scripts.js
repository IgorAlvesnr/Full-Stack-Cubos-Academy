const { getCityFromZipcode } = require('utils-playground');

console.log('inicio');

getCityFromZipcode('21730560').then(cidade => {
    console.log(cidade);
})

console.log('Fim');