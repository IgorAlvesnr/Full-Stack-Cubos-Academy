function solucao(min, km) {
    const precoMinutoBase = 50;
    const precoKmBase = 70;

    const precoMinutoExcedente = 30;
    const precoKmExcedente = 50;

    let precoViagem = ((min * precoMinutoBase) + (km * precoKmBase));

    if (min > 20 && km > 10) {
        const tempoExcedido = min - 20;
        precoViagem += tempoExcedido * precoMinutoExcedente;
        const kmExcedido = km - 10;
        precoViagem += kmExcedido * precoKmExcedente
    } else if (min > 20) {
        const tempoExcedido = min - 20;
        precoViagem += tempoExcedido * precoMinutoExcedente
    } else if (km > 10) {
        const kmExcedido = km - 10;
        precoViagem += kmExcedido * precoKmExcedente
    }
    return Math.floor(precoViagem)
}


const min = 25;
const km = 11.5;

console.log(solucao(min, km));