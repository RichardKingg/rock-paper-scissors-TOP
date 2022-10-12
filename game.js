// Function for random item selector in an array
function getComputerChoice() {
  let arrGame = ["Rock", "Paper", "Scissors"];
  let rando = Math.floor(Math.random() * arrGame.length);
  return rando, arrGame[rando];
}

// Makes the playerSelection lower case and then Capitalizes the first letter
function caseIn(playerSelection) {
  return (
    playerSelection.charAt(0).toUpperCase() + // This line capitalizes first letter
    playerSelection.slice(1).toLowerCase() // This line cuts the first letter and leaves the rest, then it gets lower-cased
  );
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection == "Rock" && computerSelection == "Rock") ||
    (playerSelection == "Paper" && computerSelection == "Paper") ||
    (playerSelection == "Scissors" && computerSelection == "Scissors")
  ) {
    return "Draw!";
  } else if (playerSelection == "Rock" && computerSelection == "Paper") {
    return "You lose, paper beats rock!";
  } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    return "You lose, scissors beat paper!";
  } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    return "You lose, rock beats scissors!";
  } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    return "You win, rock beats scissors!";
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    return "You win, paper beats rock!";
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    return "You win, scissors beat paper!";
  }
}

// Game of 5 rounds function
function game() {
  for (let i = 0; i < 5; i++) {
    playRound(playerSelection, computerSelection);
    console.log(); // **pending part, add a score too
  }
}
const playerSelection = caseIn("ROCK");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
