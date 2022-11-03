let computerSelection = function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  switch (computerChoice) {
    case 0:
      computerChoice = "Rock";
      break;
    case 1:
      computerChoice = "Paper";
      break;
    case 2:
      computerChoice = "Scissors";
      break;
  }
  return computerChoice;
};

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "Rock" && computerSelection == "Scissors") {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection == computerSelection) {
    return `It's a Draw`;
  } else return `You Lost! ${computerSelection} beats ${playerSelection}`;
}

function game() {
  for (let i = 0; i < 5; i++) {
    let choice = prompt("Rock Paper or Scissors");
    let playerSelection =
      choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
    console.log(`Round ${i + 1}`);
    console.log(playerSelection);
    console.log(playRound(playerSelection, computerSelection()));
  }
}

game();
