/*

14 - Soma de números primos

Escreva um algoritmo que some números primos de 0 à 150 e retorne o resultado. 

*/

function sumPrimesNumbers(){
  // Desenvolva seu código nessa função
  let soma = 0;
  for (let numero = 1; numero <= 150; numero++) {
    let primo = true;
    let i = 2;
    while (i <= Math.trunc(Math.sqrt(numero)) && primo) {
      if (numero % i == 0) {
        primo = false;
      }
      i++;
    }
    if (primo) {
      soma += numero;
    }
  }
  return soma;
}

module.exports = sumPrimesNumbers;
