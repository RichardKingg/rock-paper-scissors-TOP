// Function for random item selector in an array
function getComputerChoice() {
  let arrGame = ["Rock", "Paper", "Scissors"];
  let rando = Math.floor(Math.random() * arrGame.length);
  return rando, arrGame[rando];
}

// Makes the playerSelection lower case and then Capitalizes the first letter
// function caseIn(playerSelection) {
//   if (playerSelection === null) {
//     return;
//   }
//   return (
//     playerSelection.charAt(0).toUpperCase() + // This line capitalizes first letter
//     playerSelection.slice(1).toLowerCase() // This line cuts the first letter and leaves the rest, then it gets lower-cased
//   );
// }

let playerWin = false;
let computerWin = false;
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection == "Rock" && computerSelection == "Rock") ||
    (playerSelection == "Paper" && computerSelection == "Paper") ||
    (playerSelection == "Scissors" && computerSelection == "Scissors")
  ) {
    playerWin = false;
    computerWin = false;
    gameStatus.textContent = "Draw!";
    return;
  } else if (playerSelection == "Rock" && computerSelection == "Paper") {
    computerWin = true;
    computerScore++;
    gameStatus.textContent = "You lose, paper beats rock!";
    return;
  } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    computerWin = true;
    computerScore++;
    gameStatus.textContent = "You lose, scissors beat paper!";
    return;
  } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    computerWin = true;
    computerScore++;
    gameStatus.textContent = "You lose, rock beats scissors!";
    return;
  } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    playerWin = true;
    playerScore++;
    gameStatus.textContent = "You win, rock beats scissors!";
    return;
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    playerWin = true;
    playerScore++;
    gameStatus.textContent = "You win, paper beats rock!";
    return;
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    playerWin = true;
    playerScore++;
    gameStatus.textContent = "You win, scissors beat paper!";
    return;
  }
}

const buttons = document.querySelectorAll("button");
const reset = document.getElementById("reset");
const scoreCont = document.getElementById("scoreCont");
const playerMarker = document.getElementById("playerMarker");
const computerMarker = document.getElementById("computerMarker");
const selections = document.getElementById("selections");
const gameStatus = document.getElementById("gameStatus");
const winMsg = document.getElementById("winMsg");

for (const button of buttons) {
  button.addEventListener("click", function () {
    playerSelection = button.value;
    computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);

    playerMarker.textContent = `Player Score: ${playerScore}`;
    computerMarker.textContent = `Computer Score: ${computerScore}`;
    selections.textContent = `Player chooses: ${playerSelection} Computer Chooses: ${computerSelection}`;

    if (playerScore === 5 && playerScore > computerScore) {
      winMsg.textContent = `Player wins game!`;
      playerScore = 0;
      computerScore = 0;
    } else if (computerScore === 5 && computerScore > playerScore) {
      winMsg.textContent = `Computer wins game!`;
      playerScore = 0;
      computerScore = 0;
    }

    if (
      reset.addEventListener("click", function () {
        playerMarker.textContent = `Player Score: 0`;
        computerMarker.textContent = `Computer Score: 0`;
        selections.textContent = `Select a button!`;
        gameStatus.textContent = `*****`;
        playerScore = 0;
        computerScore = 0;
        winMsg.textContent = `*****`;
      })
    );
  });
}

// Game of 5 rounds function

// function game() {
//   for (let i = 0; i < 5; i++) {
//     computerSelection = getComputerChoice();
//     playerSelection = caseIn(prompt("Rock, Paper or Scissors?"));
//     if (playerSelection === null) {
//       return;
//     }
//     playRound(playerSelection, computerSelection);
//     if (playerSelection === computerSelection) {
//       console.log("Draw!");
//     } else if (playerWin === true) {
//       playerScore++;
//     } else if (computerWin === true) {
//       computerScore++;
//     }
//     console.log(playerScore, computerScore);

//for (let i = 0; i < 1; i++) {
// playRound(playerSelection, computerSelection);
//if (playerSelection === computerSelection) {
//  console.log("Draw!");
//  } else if (playerWin === true) {
//     playerScore++;
//  } else if (computerWin === true) {
//   computerScore++;
// }
//  console.log(playerScore, computerScore);
// }
// }
//   if (playerScore === computerScore) {
//     console.log("The game is a draw!");
//   } else if (playerScore > computerScore) {
//     console.log("Player wins game!");
//   } else if (computerScore > playerScore) {
//     console.log("Computer wins game!");
//   }
// }

//game();
