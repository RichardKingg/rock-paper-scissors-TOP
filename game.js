// Function for random item selector in an array
function getComputerChoice() {
  let arrGame = ["Rock", "Paper", "Scissors"];
  let rando = Math.floor(Math.random() * arrGame.length);
  return rando, arrGame[rando];
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
