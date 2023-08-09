// O Math.random() retorna um número aleatório entre 0 e 1 (incluindo o 0, mas não o 1) e o Math.floor() arredonda o número para baixo para o número inteiro mais próximo, e retorna o resultado.
// utilizando o ParseInt para converter o número aleatório em inteiro
// console.log(parseInt(Math.random() * 100))
const menorValor = 1;
const maiorValor = 500;
const NumeroSecreto = geraNumeroAleatorio();

const elementoMenorValor = document.getElementById("menor-valor");
elementoMenorValor.innerHTML = menorValor;
const elementoMaiorValor = document.getElementById("maior-valor");
elementoMaiorValor.innerHTML = maiorValor;


function geraNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1);
}



console.log("o numero secreto e:",NumeroSecreto)