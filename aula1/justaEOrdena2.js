const { edFolha, edGalho } = require('./arrays');

function juntaLista(lista1, lista2) {
  const listaFinal = [];
  let posicaoAtualLista1 = 0;
  let posicaoAtualLista2 = 0;

  while (posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length) {
    if (lista1[posicaoAtualLista1].preco < lista2[posicaoAtualLista2].preco) {
      listaFinal.push(lista1[posicaoAtualLista1]);
      posicaoAtualLista1++;
    } else {
      listaFinal.push(lista2[posicaoAtualLista2]);
      posicaoAtualLista2++;
    }
  }
  return listaFinal.concat(
    posicaoAtualLista1 < lista1.length
      ? lista1.slice(posicaoAtualLista1)
      : lista2.slice(posicaoAtualLista2)
  );
}

console.log(juntaLista(edFolha, edGalho));
