const selection = document.querySelector(".player");
const playerButtons = document.querySelectorAll(".p-button");
const winImg = "./images/Win.JPG";
const loseImg = "./images/Lose.JPG";
const drawImg = "./images/Default.JPG";
let playerScore = 0;
let cpuScore = 0;

const cpuOptions = ["computer-rock", "computer-paper", "computer-scissors"];

const outcomeText = {
  win: "YOU WIN!",
  lose: "YOU LOSE!",
  draw: "IT'S A DRAW!",
  default: "CHOOSE!",
  playerRound: "PLAYER WINS!",
  cpuRound: "COMPUTER WINS!",
};

const winCondition = new Map()
  .set("player-rock", "computer-scissors")
  .set("player-paper", "computer-rock")
  .set("player-scissors", "computer-paper");

const drawCondition = new Map()
  .set("player-rock", "computer-rock")
  .set("player-paper", "computer-paper")
  .set("player-scissors", "computer-scissors");

selection.addEventListener("click", playerSelection);

function playerSelection(e) {
  if (e.target !== e.currentTarget) {
    let selectedButton = e.target.id;
    playRound(selectedButton, cpuSelection());
  }
  e.stopPropagation();
}

function cpuSelection() {
  let cpuChoice = Math.floor(Math.random() * 3);
  return cpuOptions[cpuChoice];
}

function playRound(player, computer) {
  animation(player, computer);
  if (winCondition.get(player) === computer) {
    win();
  } else if (drawCondition.get(player) === computer) {
    draw();
  } else lose();
}

function win() {
  playerScore++;
  if (playerScore === 5) {
    outcomeUpdate(winImg, outcomeText.playerRound);
    setTimeout(reset, 1000);
  } else outcomeUpdate(winImg, outcomeText.win);
}

function lose() {
  cpuScore++;
  if (cpuScore === 5) {
    outcomeUpdate(loseImg, outcomeText.cpuRound);
    setTimeout(reset, 1000);
  } else outcomeUpdate(loseImg, outcomeText.lose);
}

function draw() {
  outcomeUpdate(drawImg, outcomeText.draw);
}

function outcomeUpdate(outcomeImg, outcomeText) {
  document.querySelector(".p-score").textContent = playerScore;
  document.querySelector(".cpu-score").textContent = cpuScore;
  document.querySelector(".outcome-desc").textContent = outcomeText;
  document.querySelector(".outcome").src = outcomeImg;
}

function reset() {
  playerScore = 0;
  cpuScore = 0;
  outcomeUpdate(drawImg, outcomeText.default);
}

function animation(player, computer) {
  document.getElementById(player).classList.add("rotate");
  document.getElementById(computer).classList.add("rotate");
  setTimeout(() => {
    document.getElementById(player).classList.remove("rotate");
    document.getElementById(computer).classList.remove("rotate");
  }, 1000);
}
