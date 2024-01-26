let casosConfirmados = 38_303_320;
let casosAtivos = 38_456;

let taxaMortalidade = ((casosConfirmados) * 0.019).toFixed(1);
let taxaRecuperaçao = ((taxaMortalidade / casosConfirmados) * 100).toFixed(2);
let casosRecuperados = (casosConfirmados - taxaMortalidade).toFixed(1);
let casosativospercentual = (casosAtivos / casosConfirmados) * 100;

console.log(`O total de casos confirmados no Brasil é de ${casosConfirmados}`);
console.log(`Total de casos confirmados: ${casosConfirmados}`);
console.log(`Total de casos Ativos: ${casosAtivos}`);
console.log(`Total de casos recuperados: ${casosRecuperados}`);
console.log(`total de mortos são: ${taxaMortalidade}`);
console.log(`A taxa de recuperação está: ${taxaRecuperaçao} %`);