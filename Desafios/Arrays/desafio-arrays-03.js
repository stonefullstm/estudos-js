/*

03 - Encontre uma pessoa convidada em uma lista de nomes

Escreva um algoritmo que recebe um array de nomes quaisquer e o nome da pessoa convida a ser encontrada. 

Se encontrar o nome na lista retorne:
-----------------------
"O nome está na lista."
-----------------------

Caso o contrário:
---------------------------
"O nome não está na lista."
---------------------------

*/

function findGuest(names, guest){
  // Desenvolva seu código nessa função
  var achou = false;
  var i = 0;
  while (i < names.length && !achou) {
  	if (names[i] == guest) {
  		achou = true;
  	}
  	i++;
  }
  if (achou) {
  	return "O nome está na lista.";
  } else {
  	return "O nome não está na lista."; // Retorne o resultado aqui
  }
}

module.exports = findGuest;
