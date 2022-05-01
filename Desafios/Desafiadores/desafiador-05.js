/*

05 - Varinhas mágicas

Você foi a pessoa designada para escrever um novo sistema para Olivaras, o fabricante de varinhas mágicas.

Como se sabe, a varinha escolhe o(a) bruxo(a), então você deverá criar um algoritmo que recebe o nome da pessoa aspirante e o nome da varinha a ser testada.

Considere a seguinte tabela:

|       Bruxo(a)           |               Varinha               |

|    Harry Potter          |    Azevinho e Pena de Fênix         |
|    Rony Weasley          |    Salgueiro e Pelo de Unicórnio    |
|    Hermione Granger      |    Videira e Fibra de Dragão        |
|    Alvo Dumbledore       |    Salgueiro e Pelo de Testrálio    |
|    Belatriz Lestrange    |    Nogueira e Fibra de Dragão       |

Se a varinha escolher a pessoa aspirante de acordo com a tabela, retorne:
-----------------------------
"Curioso... muito curioso..."
-----------------------------

Caso o contrário:
--------------------------------
"Não, não! Decididamente, não.!"
--------------------------------

Desafio: faça usando apenas um único IF acompanhado por um único Else.

*/

function magicWand(wizard, wand){
  // Desenvolva seu código nessa função
  let bruxo = ['Harry Potter', 'Rony Weasley', 'Hermonie Granger', 'Alvo Dumbledore', 'Belatriz Lestrange'];
  let varinha = ['Azevinho e Pena de Fênix', 'Salgueiro e Pelo de Unicórnio', 
    'Videira e Fibra de Dragão', 'Salgueiro e Pelo de Testrálio', 'Nogueira e Fibra de Dragão'];
  let posicao = bruxo.indexOf(wizard);
  if (varinha[posicao] === wand) {
    return 'Curioso... muito curioso...';
  } else {
    return 'Não, não! Decididamente, não.!';
  }
}

module.exports = magicWand;
