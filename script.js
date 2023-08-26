const playerMenu = document.querySelector('#player-menu');
const cpuMenu = document.querySelector('#cpu-menu');
let playerChoice;

function getComputerChoice() {
  randomNum = Math.floor(Math.random() * 3);
  return randomNum === 0
    ? 'cpu-mace'
    : randomNum === 1
    ? 'cpu-shield'
    : 'cpu-crossbow';
}

function playRound(playerChoice, cpuChoice) {
  let outcome;
  (playerChoice === 'player-mace' && cpuChoice === 'cpu-shield') ||
  (playerChoice === 'player-shield' && cpuChoice === 'cpu-crossbow') ||
  (playerChoice === 'player-crossbow' && cpuChoice === 'cpu-mace')
    ? (outcome = true)
    : (outcome = false);
  return outcome;
}

function displayWinner(outcome) {
  if (outcome) {
    playerMenu.style.backgroundColor = 'green';
    cpuMenu.style.backgroundColor = 'red';
  } else {
    cpuMenu.style.backgroundColor = 'green';
    playerMenu.style.backgroundColor = 'red';
  }
}

playerMenu.addEventListener('click', e => {
  if (e.target.id === 'player-menu') {
    return null;
  } else {
    playerChoice = e.target.id;
    outcome = playRound(playerChoice, getComputerChoice());
    displayWinner(outcome);
  }
});
