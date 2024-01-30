const valorDaCompra = 100;
const numeroDeParcelas = 3;
const desconto = valorDaCompra * 0.9;


if (numeroDeParcelas === 1) {
    console.log(`Você deve pagar ${desconto} reais`);
} else {
    const valorFinal = (valorDaCompra / numeroDeParcelas).toFixed(2);
    console.log(`Você deve pagar ${numeroDeParcelas} parcelas de R$${valorFinal} reais`);
}