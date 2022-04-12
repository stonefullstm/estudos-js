/*

01 - Verifica se pessoa tem idade para dar entrada na CNH

Escreva um algoritmo que recebe o nome e ano de nascimento de uma pessoa e verifique se ela pode dar entrada na CNH.

Se a pessoa tiver menos de 18 anos retorne:
------------------------------------------------------
"x tem y anos de idade e não pode iniciar o processo."
------------------------------------------------------

Caso contrário:
--------------------------------------------------
"x tem y anos de idade e pode iniciar o processo."
--------------------------------------------------

*/

function cnhProcess(name, birthYear){
  // Desenvolva seu código nessa função
  let hoje = new Date();
  let idade = hoje - birthYear;
  if (idade >= 18) {
    return `${name} tem ${idade} e pode iniciar o processo.`;
  } else {
    return `${name} tem ${idade} e não pode iniciar o processo.`;
  }
}

module.exports = cnhProcess;
