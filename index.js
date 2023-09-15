/*
Declara uma variável "i" e atribui o valor 0 a ela
Declara uma variável "j" sem atribuir valor
Atribui o valor 10 à variável "i"
Atribui a string "Mundo" à variável "j"
*/


/*
let x = 5; // Declara uma variável "x" e atribui o valor 5 a ela
let y; // Declara uma variável "y" sem atribuir valor
x = 10; // Atribui o valor 10 à variável "x"
y = "Olá"; // Atribui a string "Olá" à variável "y"
*/


/*

const PI = 3.14; // Declara uma constante com valor 3.14
const nome = "João"; // Declara uma constante com valor "João"
const array = [1, 2, 3]; // Declara uma constante que armazena um array

// Tentativa de atribuir um novo valor à constante PI:
PI = 3.1415; // Gera um erro, pois não é possível reatribuir valor a uma constante


2 - João comecou a trabalhar como desenvolvedor mas precisa de comprar um
computador melhor. Achou um no preço de R$4.500,00 que é o valor que pode gastar
no momento. Se ele comprar online vai ter um desconto de 20%.
Calcule o preço final que João pagará com o desconto.
Entrada:
valor inicial do computador
Processamento:
Calcular o desconto no valor inicial
Saída:
Resultado do preço final no console.
*/

// Exec - 1
let i = 0;
let j;

i = 10;
j = "Mundo";

// Exec - 2

let x = 5;
let y;

x = 10;
y = "Olá";

// Exec - 3
const PI = 3.14;
const nome = "João";
const array = [1, 2, 3];

//PI = 3.1415; // Gera um erro, pois não é possível reatribuir valor a uma constante

// Exec 4

// Valor inicial do computador
const valorInicial = 4500.00;

// Porcentagem de desconto
const percentualDesconto = 20;

// Calcula o valor do desconto (20% do valor inicial)
const desconto = (percentualDesconto / 100) * valorInicial;

// Calcula o preço final com desconto
const precoFinal = valorInicial - desconto;

// Exibe o preço final no console
console.log("O preço final com desconto é R$" + precoFinal.toFixed(2));