/* 6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz. */
/* Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais. */
/* Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case). */
/* Se a peça passada for inválida, o programa deve retornar uma mensagem de erro. */
/* Exemplo: bishop -> diagonals */

let piece = "kNigHT";

switch (piece.toLowerCase()) {
  case "queen":
    console.log("The Queen can move any number of vacant squares in any straight direction: forward, backward, sideways and diaggonally");
    break;
  case "rook":
    console.log("The Rook can move any number of vacant squares forward, backward and sideways (but not diaggonally)");
    break;
  case "bishop":
    console.log("The Bishop can move any number of vacant squares, diaggonally");
    break;
  case "knight":
    console.log("The Knight moves two squares in one direction and then one more square at a 90 degree angle, like the shape of an 'L'. Knight is the only piece that can move over other pieces.");
    break;
  case "pawn":
    console.log("The Pawn moves forward, but captures diagonally, allways one square, except for the first move of the game, when it can move forward two squares.");
    break;
  case "king":
    console.log("The King can only move one square in any direction - forward, backward, sideways and diaggonally.");
    break;
  default:
    console.log("Invalid piece name.");
}