/*

01 - Inverte nomes

Escreva um algoritmo que recebe uma string com o formato "Nome Sobrenome" e retorne
uma outra string com os nomes invertidos.

Por exemplo:
---------------------
Entrada:
"Xablau Xablauzinho"

Saída:
"Xablauzinho Xablau"
---------------------

*/

function reverseNames(fullName) {
  // Desenvolva seu código nessa função
  var pos = fullName.indexOf(' ');
  return fullName.slice(pos + 1) + ' ' + fullName.slice(0, pos);
}

module.exports = reverseNames;
