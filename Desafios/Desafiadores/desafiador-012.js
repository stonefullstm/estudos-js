/*

12 - Fatorial

Escreva um algoritmo que recebe um número n e calcule e retorne o seu fatorial.

*/

function factorial(n) {
  // Desenvolva seu código nessa função
  let fatorial = 1;
  for (let i = 1; i <= n; i++) {
    fatorial = fatorial * i;
  }
}

module.exports = factorial;
