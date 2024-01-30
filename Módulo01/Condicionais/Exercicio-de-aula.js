const valorDaCompra = 100;
const numeroDeParcelas = 7;
const desconto = valorDaCompra * 0.9;


if (numeroDeParcelas === 1) {
    console.log(`Você deve pagar ${desconto} reais`);
} else {
    if (numeroDeParcelas >= 2 && numeroDeParcelas <= 6) {

        const valorFinal = (valorDaCompra / numeroDeParcelas).toFixed(2);
        console.log(`Você deve pagar ${numeroDeParcelas} parcelas sem juros de R$${valorFinal} reais.`);

    } else
        if (numeroDeParcelas >= 7 && numeroDeParcelas <= 12) {
            const valorFinal = (valorDaCompra * (1 + 1 / 100) ** numeroDeParcelas).toFixed(2);
            const valorJuros = (valorFinal / numeroDeParcelas).toFixed(2);
            console.log(`Você deve pagar ${numeroDeParcelas}x de R$${valorJuros} com o Total da compra em R$${valorFinal} reais, Devido a incidência de juros.`)
        } else {
            console.log("Número de parcelas invalidos.");
        }
}