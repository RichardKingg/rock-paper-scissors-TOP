// Function for random item selector in an array
function getComputerChoice() {
  let arrGame = ["Rock", "Paper", "Scissors"];
  let rando = Math.floor(Math.random() * arrGame.length);
  return rando, arrGame[rando];
}

// Makes the playerSelection lower case and then Capitalizes the first letter
function caseIn(playerSelection) {
  if (playerSelection === null) {
    return;
  }
  return (
    playerSelection.charAt(0).toUpperCase() + // This line capitalizes first letter
    playerSelection.slice(1).toLowerCase() // This line cuts the first letter and leaves the rest, then it gets lower-cased
  );
}

let playerWin = false;
let computerWin = false;
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection == "Rock" && computerSelection == "Rock") ||
    (playerSelection == "Paper" && computerSelection == "Paper") ||
    (playerSelection == "Scissors" && computerSelection == "Scissors")
  ) {
    playerWin = false;
    computerWin = false;
  } else if (playerSelection == "Rock" && computerSelection == "Paper") {
    computerWin = true;
    console.log("You lose, paper beats rock!");
  } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    computerWin = true;
    console.log("You lose, scissors beat paper!");
  } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    computerWin = true;
    console.log("You lose, rock beats scissors!");
  } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    playerWin = true;
    console.log("You win, rock beats scissors!");
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    playerWin = true;
    console.log("You win, paper beats rock!");
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    playerWin = true;
    console.log("You win, scissors beat paper!");
  }
}

// Game of 5 rounds function
function game() {
  for (let i = 0; i < 5; i++) {
    computerSelection = getComputerChoice();
    playerSelection = caseIn(prompt("Rock, Paper or Scissors?"));
    if (playerSelection === null) {
      return;
    }
    for (let i = 0; i < 1; i++) {
      playRound(playerSelection, computerSelection);
      if (playerSelection === computerSelection) {
        console.log("Draw!");
      } else if (playerWin === true) {
        playerScore++;
      } else if (computerWin === true) {
        computerScore++;
      }
      console.log(playerScore, computerScore);
    }
  }
  if (playerScore === computerScore) {
    console.log("The game is a draw!");
  } else if (playerScore > computerScore) {
    console.log("Player wins game!");
  } else if (computerScore > playerScore) {
    console.log("Computer wins game!");
  }
}

game();
