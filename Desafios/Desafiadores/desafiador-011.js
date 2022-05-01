/*

11 - Array de notas musicais - 3 

Relembrando, dada a escala natural de Dó, cada uma das 7 notas possui um grau representado por um algarismo romano conforme abaixo:

| Dó | Ré | Mi  | Fá | Sol | Lá | Si  |
| I  | II | III | IV |  V  | VI | VII |

Além disso, cada nota forma um acorde chamado tríade.

A tríade é composta por uma sequência a partir dela com a "primeira" nota, a "terça" e a "quinta".

Exemplos:

Tríade de Dó: Dó (a primeira), Mi (a terça), Sol (a quinta).
Tríade de Ré: Ré (a primeira), Fá (a terça), Lá (a quinta).

Escreva um algoritmo que recebe um array de notas, e retorne um outro array de objetos com os graus das notas na escala de dó e as notas que formam sua tríade.

Por exemplo:
-------------------------------
Entrada: 
['Ré', 'Sol', 'Dó']

Saída:
 [
   {
     degree: 'II',
     triad: ['Ré', 'Fá', 'Lá']
   },
   {
     degree: 'V',
     triad: [ 'Sol', 'Si', 'Ré' ]
   },
   {
     degree: 'I',
     triad: ['Dó', 'Mi', 'Sol']
   },
 ]
--------------------------------

*/

function musicalNotes3(notes){
  // Desenvolva seu código nessa função
  let escala = [
    {
      note: "Dó",
      degree: "I"
    },
    {
      note: "Ré",
      degree: "II"
    },
    {
      note: "Mi",
      degree: "III"
    },
    {
      note: "Fá",
      degree: "IV"
    },
    {
      note: "Sol",
      degree: "V"
    },
    {
      note: "Lá",
      degree: "VI"
    },
    {
      note: "Si",
      degree: "VII"
    }

  ]
  let degrees = [];
  for (let i = 0; i < notes.length; i++) {
    let j = 0;
    let achou = false;
    let triad = [];
    while (j < escala.length && !achou) {
      if (escala[j].note === notes[i]) {
        triad.push(escala[j].note);
        triad.push(escala[(j+2) % 7].note);
        triad.push(escala[(j+4) % 7].note);

        degrees.push({degree: escala[j].degree, triad: triad});
      }
      j++;
    }
  }
  return degrees;
}

module.exports = musicalNotes3;
