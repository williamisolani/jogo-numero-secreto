const menorValor = 1;
const maiorValor = 1000;

function gerarNumeroAleatorio() {
  numeroGerado = parseInt(Math.random() * maiorValor + 1);
  return numeroGerado;
}

const elementoMenorValor = document.getElementById("menor-valor");
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById("maior-valor");
elementoMaiorValor.innerHTML = maiorValor;

console.log(gerarNumeroAleatorio());
