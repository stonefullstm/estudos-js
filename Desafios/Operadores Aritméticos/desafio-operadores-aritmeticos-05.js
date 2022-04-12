/*

05 - Área de um triângulo

Escreva um algoritmo que calcule a área de um triângulo.
Área = (base*altura) / 2 e retorne no formato:

-----------------------------------------------
"A área do triângulo de base x e altura y é: z."
-----------------------------------------------

*/

function triangleArea(base, height){
  // Desenvolva seu código nessa função
  let area = `A área do triângulo de base ${base} e altura ${altura} é: ${base * altura / 2}.`;
  return area;
}

module.exports = triangleArea;
