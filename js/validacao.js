function validacaoDoChute(chute){
  const numero = +chute

  if(seChuteForInvalido(numero)){
    elementoChute.innerHTML += '<div>Valor Invalido!</div>'
    console.log("chute invalido")
    if (chute.toUpperCase() === "GAME OVER") {

      document.body.innerHTML =
          `
          <h2>Game Over!!!</h2>
          <h3>Pressione o botão para jogar novamente</h3>
          <button class=btn id="jogar-novamente" onclick="window.location.reload()" >Jogar novamente</button>
          `
          document.body.style.backgroundColor = "black";
    } else {
        elementoChute.innerHTML += '<div>Valor Inválido</div>';
    }
  }

  if(tamanhoDoNumero(numero)){
    elementoChute.innerHTML += `<div>Valor Invalido! o numero deve ser entre ${menorValor} e ${maiorValor}</div>`
    console.log(`Chute invalido! o numero deve ser entre ${menorValor} e ${maiorValor}`)
    
  }

  if(numero === NumeroSecreto){
    document.body.innerHTML += `
    <h2>Parabéns! Você acertou!</h2> 
    <h3>O número secreto é ${NumeroSecreto}</h3>
    <button class="btn" id="iniciar" onclick="window.location.reload()">Jogar novamente</button>
    `
    console.log("Parabéns! Você acertou!")
  }else if(numero > NumeroSecreto){
    elementoChute.innerHTML += '<div>O numero secreto é menor <i class="fa-solid fa-down-long"></i></div>'
    console.log("Seu chute foi maior que o número secreto!")
  }else{
    elementoChute.innerHTML += '<div>O numero secreto é maior <i class="fa-solid fa-up-long"></i></div>'
  }

}

function seChuteForInvalido(numero) {
  return Number.isNaN(numero);
}

function tamanhoDoNumero(numero){
  return numero < menorValor || numero > maiorValor;
}