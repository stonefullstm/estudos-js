/*

08 - Descubra quantas letras tem

Escreva um algoritmo que recebe 2 parâmetros: uma string (frase ou palavra) e uma letra.

A função deve retornar quantas letras passadas como 2º parâmetro existem na string.

Obs: Trate as vogais com acento como não tendo, por exemplo:
a = á, ã, à.

*/

function countLetters(string, letter) {
  // Desenvolva seu código nessa função
  let string1 = string.normalize("NFD").replace(/[^a-zA-Zs]/g, "");
  let count = 0;
  for (var i = 0; i < string1.length; i++) {
    if (string1[i].toLowerCase() == letter) {
      count++;
    }
  }
  return count;
}

module.exports = countLetters;
