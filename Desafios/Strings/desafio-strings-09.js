/*

09 - Brincando de espionagem

Joana e Jonas estão brincando de espionagem e querem trocar mensagens codificadas.

Escreva um algoritmo que recebe uma string troque as vogais no seguinte padrão e a retorne:
a - 5
e - b
i - 9
o - p
u - 1

*/

function encodeMessage(string) {
  // Desenvolva seu código nessa função
  let newWord = "";
  for (let index = 0; index < string.length; index += 1) {
    let word = string[index];
    switch (word) {
      case "a":
        newWord += word.replace("a", "5");
        break;
      case "e":
        newWord += word.replace("e", "b");
        break;
      case "i":
        newWord += word.replace("i", "9");
        break;
      case "o":
        newWord += word.replace("o", "p");
        break;
      case "u":
        newWord += word.replace("u", "1");
        break;
      default:
        newWord += word;
        break;
    }
  }
  return newWord;
}

module.exports = encodeMessage;
