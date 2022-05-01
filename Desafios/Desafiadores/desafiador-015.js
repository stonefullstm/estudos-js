/* Não entendi o que é para fazer no 15 */

// 15 - Fatorial e média

/*

Faça uma função que calcule o fatorial de um número recebido por parâmetro e em seguida, utilize-a para fazer a função que calcula a média dos fatoriais de A a B,
sendo A e B números inteiros maiores ou iguais a 0.
A média deve ter até 2 casas decimais de precisão.
*/

function factorial15(number) {
  // Desenvolva aqui a lógica para calcular o fatorial
  let fatorial = 1;
  for (let i = 1; i <= number; i++) {
    fatorial = fatorial * i;
  }
  return fatorial;
}

function meanFactorialFromAToB(a, b) {
  // Desenvolva aqui a lógica para calcular a média dos fatoriais de 0 a 5
  let soma = 0;
  for (let i = a; i <= b; i++) {
    soma += factorial15(i);
  }
  let media = soma / (b - a + 1);
  return media.toFixed(2);
}

module.exports = {
  factorial15,
  meanFactorialFromAToB,
};
