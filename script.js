const playerMenu = document.querySelector('#player-menu');
const cpuMenu = document.querySelector('#cpu-menu');
const outcomeText = document.querySelector('#outcome-text');

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

function displayOutcome(outcome) {
  outcomeText.textContent = outcome ? 'YOU WON' : 'YOU LOST';

  outcomeText.classList.remove('hidden');
  outcomeText.classList.add('outcome-text-animation');

  setTimeout(() => {
    outcomeText.classList.add('hidden');
    outcomeText.classList.remove('outcome-text-animation');
  }, 3000);
}

playerMenu.addEventListener('click', e => {
  displayOutcome(playRound(e.target.id, getComputerChoice()));
});
