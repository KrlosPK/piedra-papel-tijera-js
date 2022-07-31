const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const TIE = 0;
const LOSE = 1;
const WIN = 2;

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultText = document.getElementById("resultText");
const machineImgEl = document.getElementById("machineImg");
const userImgEl = document.getElementById("userImg");

rockBtn.addEventListener("click", () => {
  play(ROCK);
});
paperBtn.addEventListener("click", () => {
  play(PAPER);
});
scissorsBtn.addEventListener("click", () => {
  play(SCISSORS);
});

// Mostrar la opción elegida por el User
// Y hacer que la CPU seleccione uno (con animación)
function play(userOption) {
  userImgEl.src = "imgs/" + userOption + ".png";
  resultText.innerHTML = "Eligiendo...";
  const interval = setInterval(function () {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;

    const machineOption = cambiarTipo();
    machineImgEl.src = "imgs/" + machineOption + ".png";
  }, 120);

  setTimeout(function () {
    clearInterval(interval);
    const machineOption = cambiarTipo();
    const result = calcResult(userOption, machineOption);
    machineImgEl.src = "imgs/" + machineOption + ".png";
    switch (result) {
      case TIE:
        resultText.innerHTML = "Haz empatado 😑";
        break;
      case WIN:
        resultText.innerHTML = "¡Has Ganado, enhorabuena! 🥳";
        break;
      case LOSE:
        resultText.innerHTML = "Has perdido, inténtanlo de nuevo 😢";
        break;
    }
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
  }, 1200);
}

// Cambiar de Number a String para poner la URL de la imagen
function cambiarTipo() {
  const number = Math.floor(Math.random() * 3);
  if (number === 1) return "rock";
  else if (number === 2) return "paper";
  else return "scissors";
}

// Validación para saber quién ganó el partido
function calcResult(userOption, machineOption) {
  if (userOption === machineOption) return TIE;
  else if (userOption === ROCK) if (machineOption === SCISSORS) return WIN;
  if (machineOption === PAPER) return LOSE;
  else if (userOption === PAPER) if (machineOption === SCISSORS) return LOSE;
  if (machineOption === ROCK) return WIN;
  else if (userOption === SCISSORS) if (machineOption === ROCK) return LOSE;
  if (machineOption === PAPER) return WIN;
}
