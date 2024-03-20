function solucao(min, km) {
    const precoMinutoBase = 50;
    const precoKmBase = 70;
    const precoMinutoExcedente = 30;
    const precoKmExcedente = 50;

    let precoDentroLimites = (Math.min(min, 20) * precoMinutoBase) + (Math.min(km, 10) * precoKmBase);

    let minExcedente = Math.max(0, min - 20) * precoMinutoExcedente;
    let kmExcedente = Math.max(0, km - 10) * precoKmExcedente;

    let precoTotal = precoDentroLimites + minExcedente + kmExcedente;

    console.log(precoTotal);
}

solucao(25, 11.5)