/*

04 - Verifique se todos os dados de uma lista são do mesmo tipo

Escreva uma algoritmo que recebe um array de dados quaisquer e verifique se todos são do mesmo tipo.

Se todos forem retorne:
------
true
------

Caso contrário:
-------
false
-------

Obs: Os retornos tem que ser dados do tipo boolean.

*/

function dataType(types){
  // Desenvolva seu código aqui.
  var mesmo = true;
  var i = 1;
  while (i < types.length && mesmo) {
  	if (typeof types[i] != typeof types[i-1]) {
  		mesmo = false;
  	}
  	i++;
  } 
  return mesmo; // Retorne o resultado aqui
}

module.exports = dataType;
