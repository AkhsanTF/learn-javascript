const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
let playerWins = 0;
let computerWins = 0;

const choices = ["Rock", "Paper", "Scissors"];

function playGame(playerChoices) {
  const computerChoices = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (playerChoices === computerChoices) {
    result = "IT'S A TIE!";
  } else {
    switch (playerChoices) {
      case "Rock":
        result = computerChoices === "Scissors" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "Paper":
        result = computerChoices === "Rock" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "Scissors":
        result = computerChoices === "Paper" ? "YOU WIN!" : "YOU LOSE!";
        break;
    }
  }

  playerDisplay.textContent = `PLAYER : ${playerChoices}`;
  computerDisplay.textContent = `COMPUTER : ${computerChoices}`;
  resultDisplay.textContent = result;
  resultDisplay.classList.remove("greenText", "redText");

  switch (result) {
    case "YOU WIN!":
      resultDisplay.classList.add("greenText");
      playerWins++;
      playerScore.textContent = playerWins;
      break;
    case "YOU LOSE!":
      resultDisplay.classList.add("redText");
      computerWins++;
      computerScore.textContent = computerWins;
      break;
  }
}
