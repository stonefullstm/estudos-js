/*

6 - Analise de preços da lista de compras

Escreva um algoritmo que irá receber um array de produtos e retorne uma string no formato da saída que contem:

* O produto com maior preço;
* O preço do produto;
* A média do preços dos produtos.

Por exemplo:
---------------------------------------------------------------------------------------------------
Entrada:
[
  { name: 'lápis', price: 2 },
  { name: 'borracha', price: 4 },
  { name: 'caneta', price: 5 },
  { name: 'régua', price: 6 },
  { name: 'apontador', price: 3 },
  { name: 'teclado gamer', price: 180 },
  { name: 'mochila', price: 33 },
  { name: 'fone de ouvido', price: 57 },
  { name: 'mousepad', price: 35 },
]

Saída:
"O produto mais caro é teclado gamer e custa: R$ 180, a média de preços dos produtos é de: R$36.11."
----------------------------------------------------------------------------------------------------

*/

function productAnalysis(products){ // corrigir nome
  // Desenvolva seu código nessa função
  let maior = products[0].price;
  let nome = products[0].name;
  let soma = products[0].price;
  for (let i = 1; i < products.length; i++) {
    if (products[i].price > maior) {
      maior = products[i].price;
      nome = products[i].name;
    }
    soma += products[i].price;
  }
  let media = soma / products.length;
  return `O produto mais caro é ${nome} e custa: R$ ${maior}, a média de preços dos produtos é de: R$ ${media.toFixed(2)}.`
}

module.exports = productAnalysis;
