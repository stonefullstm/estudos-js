/*

03 - Array de notas musicais

Uma música normalmente possui uma sequência de notas.

Data a escala natural de Dó, cada uma das 7 notas possui um grau representado por um algarismo romano conforme abaixo:

| Dó | Ré | Mi  | Fá | Sol | Lá | Si  |
| I  | II | III | IV |  V  | VI | VII |

Escreva um algoritmo que recebe um array de notas e retorne um outro array com os respectivos graus da escala de Dó.

Por exemplo:
----------------------------
Entrada:
['Ré', 'Sol', 'Dó']

Saída:
['II', 'V', 'I']
----------------------------

 */

function musicalNotes(notes) {
  // Desenvolva seu código nessa função
  let notas = {Dó: "I", Ré: "II", Mi: "III", Fá: "IV", Sol: "V", Lá: "VI", Si: "VIII"};
  let degrees = [];
  for (let i = 0; i < notes.length; i++) {
    let nota = notes[i];
    let grau = notas[nota];
    degrees.push(grau);
  }
  return degrees;
   
}

module.exports = musicalNotes;
