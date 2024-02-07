const aguaBebida = 3.5;

if (aguaBebida > 3) {
    console.log('Risco Baixo - Você está ingerindo uma boa quantidade de água, parabéns!')
} else if (aguaBebida <= 3 && aguaBebida >= 1.5) {
    console.log('Risco Moderado - Você está ingerindo pouca água, beba mais!')
} else if (aguaBebida < 1.5) {
    console.log('Risco Alto - Você está ingerindo pouquissima água, beba mais água!')
}