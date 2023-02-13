const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition
const recognition = new SpeechRecognition()
const divChute = document.getElementById("chute")

let numeroGerado
let transcript

recognition.lang = "pt-Br"
recognition.start()

recognition.addEventListener("result", function (event) {
  transcript = Number(event.results[0][0].transcript)

  if (isValidNumber(transcript)) {
    acertoOuErro(transcript, numeroGerado);

  } else {
    displayErro()
  }
})

function isValidNumber(number) {
  return number >= menorValor && number <= maiorValor;
}

function acertoOuErro(transcript, numeroGerado) {
  displayNumero()

  if (transcript === numeroGerado) {
    agregaDisplayAcerto()

  } else if (transcript > numeroGerado) {
    agregaDisplayDicaMenor()

  } else {
    agregaDisplayDicaMaior()
  }
}

document.addEventListener("click", (e) => {
  if (e.target.matches("#botao-jogar-novamente")) {
    window.location.reload();
  }
})

recognition.onend = () => {
  recognition.start()
}

function displayNumero() {
  divChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${transcript}</span>
  `
}

function displayErro() {
  divChute.innerHTML = `<p><span style="color: red">ERRO</span>: O número deve estar entre ${menorValor} e ${maiorValor}. Tente novamente!</p>`;
}

function agregaDisplayAcerto() {
  divChute.innerHTML += `
    <h2 class="mensagem-acerto">PARABENS!</h2>
    <p>Você acertou!</p>

    <button type="button" class="btn btn-secondary" id="botao-jogar-novamente"><strong>Jogar novamente</strong></button>
    `
}

function agregaDisplayDicaMenor() {
  divChute.innerHTML += `
    <div>O número secreto é <span class="mensagem-erro">menor</span> <i class="fa-solid fa-down-long"></i></div>
    `
}

function agregaDisplayDicaMaior() {
  divChute.innerHTML += `
    <div>O número secreto é <span class="mensagem-erro">maior</span> <i class="fa-solid fa-up-long"></i></div>
    `
}

function criaBotao() {
  
}