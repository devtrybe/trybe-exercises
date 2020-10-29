/* 5. Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário. */

let ladoA = 60;
let ladoB = 30;
let ladoC = 90;

if (ladoA + ladoB + ladoC == 180) {
  return true;
} else {
  return false;
}