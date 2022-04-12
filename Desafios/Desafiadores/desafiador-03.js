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
  let notas = ['Dó', 'Ré', 'Mi', 'Fá', 'Sol', 'Lá', 'Si'];
  let graus = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];
  let degrees = [];
  for (let i = 0; i < notes.length; i++) {
    let achou = false;
    let j = 0;
    while (j < notas.length && !achou) {
      if (notes[i] === notas[j]) {
        achou = true;
        degrees.push(graus[j]);
      }
      j++;
    }
    return degrees;
  } 
}

module.exports = musicalNotes;
