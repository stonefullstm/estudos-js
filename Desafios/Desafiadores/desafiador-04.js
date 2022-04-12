/*

04 - Array de notas musicais - 2

Relembrando que uma música normalmente possui uma sequência de notas.

Dada a escala Natural de Dó, cada uma das 7 notas possui:
* um grau representando po algarismo romano.
* uma "terça" maior ou menor.
* uma escala própria.

Considerando a tabela abaixo:

| Nota   | Dó    | Ré     | Mi     | Fá    | Sol       | Lá     | Si     |

| Grau   | I     | II     | III    | IV    | V         | VI     | VII    |
| Terça  | Maior | Menor  | Menor  | Maior | Maior     | Menor  | Menor  |
| Escala | Jônia | Dórica | Frígia | Lídia | Mixolídia | Eólia  | Lócrio |

Escreva um algoritmo que recebe um array de notas e retorne um outro array de objetos com os respectivos graus, terças e escalas.

Por exemplo:
-----------------------------
Entrada:
['Ré', 'Sol', 'Dó']

Saída:
[
  {
    degree: 'II',
    third: 'Menor',
    scale: 'Dórica',
  },
  {
    degree: 'V',
    third: 'Maior',
    scale: 'Mixolídia'
  },
  {
    degree: 'I',
    third: 'Maior',
    scale: 'Jônia'
  }
] 
-----------------------------

*/
function musicalNotes2(notes){
  // Desenvolva seu código nessa função
  let notas = ['Dó', 'Ré', 'Mi', 'Fá', 'Sol', 'Lá', 'Si'];
  let graus = [{degree: 'I', third: 'Maior', scale: 'Jônia'}, 
      {degree: 'II', third: 'Menor', scale: 'Dórica'}, 
      {degree: 'IIII', third: 'Menor', scale: 'Frígia'},
      {degree: 'IV', third: 'Maior', scale: 'Lídia'},
      {degree: 'V', third: 'Maior', scale: 'Mixolídia'},
      {degree: 'VI', third: 'Menor', scale: 'Eólia'},
      {degree: 'VII', third: 'Menor', scale: 'Lócrio'}];
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

module.exports = musicalNotes2;
