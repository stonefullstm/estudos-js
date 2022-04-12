/*

01 - Encontre o maior número de um array

Escreva um algoritmo que recebe um array de números inteiros, procure o maior valor e o retorne.

*/

function getMaxNumber(numbers) {
  // Desenvolva seu código nessa função
  var maior = numbers[0];
  for (var i = 1; i < numbers.length; i++) {
  	if (numbers[i] > maior) {
  		maior = numbers[i];
  	}
  }
  return maior; // Retorne o resultado aqui
}

module.exports = getMaxNumber;
