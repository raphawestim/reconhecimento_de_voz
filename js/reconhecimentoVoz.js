const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const elementoChute = document.querySelector('#chute');
recognition.lang = 'pt-BR';
recognition.start();

function onSpeak(e) {
  chute = e.results[0][0].transcript;
  exibeChute(chute);
  validacaoDoChute(chute);
  // const box = document.querySelector('.box');
  // box.innerHTML = e.results[0][0].transcript;
  // console.log(e.results[0][0].transcript);
}

function exibeChute(){
  elementoChute.innerHTML = `
  <div>Você disse:</div>
  <span class="box">${chute}</span>
  `;
}


recognition.addEventListener('result', onSpeak);

recognition.addEventListener('end', () => recognition.start());