/* Ex. 01 
Declara uma variável "i" e atribui o valor 0 a ela.
Declara uma variável "j" sem atribuir valor.
Atribui o valor 10 à variável 'i'. 
Atribui a string 'Mundo' à variável 'j'. */

let i = 0;
let j; 
i = 10;
j = "Mundo";

console.log(i)
console.log(j)

/*
Declara uma variável "x" e atribui o valor 5 a ela.
Declara uma variável "y" sem atribuir valor.
Atribui o valor 10 à variável "x".
Atribui a string "Olá" à variável "y". */
let x = 5;
let y;
x = 10; 
y = "Olá"; 

console.log(x)
console.log(y)

/*
1-
Declara uma constante com valor 3.14
Declara uma constante com valor "João"
const array = [1, 2, 3]; // Declara uma constante que armazena um array
*/

const PI = 3.14;
const nome = "João";
const lista = [1,2,3];

console.log(PI)
console.log(nome)
console.log(lista)

/*
2 - 
João comecou a trabalhar como desenvolvedor mas precisa comprar um
computador melhor. Achou um no preço de R$4.500,00 que é o valor que pode gastar no momento. Se ele comprar online vai ter um desconto de 20%.
Calcule o preço final que João pagará com o desconto.
Entrada:
valor inicial do computador
Processamento:
Calcular o desconto no valor inicial
Saída:
Resultado do preço final no console.

Forma mais extensa:
let precoLoja = 4500;
let percentualDesconto = 0.2;
let desconto = (precoLoja * percentualDesconto); 
let precoSite = (precoLoja - desconto);

Forma mais reduzida: */

let precoLoja = 4500;
let percentualDesconto = 0.2;
let precoSite = (precoLoja * (1 - percentualDesconto));
console.log(precoSite)

