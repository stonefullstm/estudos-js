/*

13 - Fibonacci

A sequência de números 0 1 1 2 3 5 8 13 21...n é conhecida como sequência de Fibonacci.

Nessa sequência, cada número, depois dos 2 primeiros é igual à soma dos 2 anteriores.

Escreva um algoritmo que recebe um valor n que corresponde ao enésimo número da sequência e retorne o enésimo número da sequência de Fibonnaci.

Por exemplo:
------------
Entrada:
5

Saída:
3
------------

*/

function fibonnaci(n){
  // Desenvolva seu código nessa função
  if (n === 1 || n === 2) {
    return 1;
  }
  let n1 = 1;
  let n2 = 1;

  for (let i = 3; i <= n; i++) {
      n2 = n1 + n2;
      n1 = n2 - n1;
  }
  return n2;
}

module.exports = fibonnaci;
