
// 2 - João comecou a trabalhar como desenvolvedor mas precisa de comprar um
// computador melhor. Achou um no preço de R$4.500,00 que é o valor que pode gastar
// no momento. Se ele comprar online vai ter um desconto de 20%.
// Calcule o preço final que João pagará com o desconto.
//100000

// Entrada:
//R$4.500,00
//20%.

const precoComputadorUm = 4500;

const precoComputadorDois = 8000

const percentualDesconto = 50;


const valor100 = 100;

// Processamento:
// Calcular o desconto no valor inicial

const fazerCalculo  = (percentualDesconto / valor100) * precoComputadorUm

const precoFinal = precoComputadorUm - fazerCalculo


// Saída:
// Resultado do preço final no console.

console.log(precoFinal)





