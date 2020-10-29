/* 10. Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos. */
/* Atente que, sobre o custo do produto, incide um imposto de 20%. */
/* Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero. */
/* O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo. */
/* valorCustoTotal = valorCusto + impostoSobreOCusto */
/* lucro = valorVenda - valorCustoTotal (lucro de um produto) */

let custoUnitario = 6;
let valorVenda = 8;
let imposto = 0.20;

let qtdVendida = 1000;

const custoFinal = custoUnitario + (custoUnitario * imposto);
const custoTotal = qtdVendida * custoFinal;
const vendaTotal = qtdVendida * valorVenda;
const lucro = vendaTotal - custoTotal;

if (custoUnitario < 0 || valorVenda < 0) {
  console.log("Erro. O custo do produto e o seu valor de venda não podem ser menores do que 0.");
} else if (valorVenda < custoFinal) {
  console.log("Transação não permitida. Venda com PREJUÍZO.")
}
  else {
  console.log("Para uma venda de " + qtdVendida + " produtos, o lucro final será de " + lucro);
}