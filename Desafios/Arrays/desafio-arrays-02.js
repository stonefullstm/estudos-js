/*

02 - Encontre o menor número de um array

Escreva um algoritmo que recebe um array de números inteiros, procure o menor valor e o retorne.

*/

function getMinNumber(numbers) {
  // Desenvolva seu código nessa função
  var menor = numbers[0];
  for (var i = 1; i < numbers.length; i++) {
  	if (numbers[i] < menor) {
  		menor = numbers[i];
  	}
  }
  return menor; // Retorne o resultado aqui
}

module.exports = getMinNumber;
