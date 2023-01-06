const { edFolha, edGalho } = require('./arrays');

function juntaLista(lista1, lista2) {
  const listaFinal = [];
  let posicaoAtualLista1 = 0;
  let posicaoAtualLista2 = 0;
  let posicaoAtual = 0;

  while (posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length) {

    if (lista1[posicaoAtualLista1].preco < lista2[posicaoAtualLista2].preco) {
      listaFinal[posicaoAtual] = lista1[posicaoAtualLista1];
      posicaoAtualLista1++;
    } else {
      listaFinal[posicaoAtual] = lista2[posicaoAtualLista2];
      posicaoAtualLista2++;
    }
    posicaoAtual++;
  }
  while (posicaoAtualLista1 < lista1.length) {
    listaFinal[posicaoAtual] = lista1[posicaoAtualLista1];
    posicaoAtualLista1++;
    posicaoAtual++;
  }
  while (posicaoAtualLista2 < lista2.length) {
    listaFinal[posicaoAtual] = lista2[posicaoAtualLista2];
    posicaoAtualLista2++;
    posicaoAtual++;
  }
  return listaFinal;
}

console.log(juntaLista(edFolha, edGalho));
