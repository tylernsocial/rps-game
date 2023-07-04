const choices = ["rock", "paper", "scissors"];
const max = 9999999;
function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
  let ans = prompt("Choose between rock, paper or scissors!");
  return ans.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  const tie = 0;
  const win = 2;
  const lose = 1;
  if (playerSelection == "rock") {
    if (computerSelection == "rock") {
      console.log("its a tie!");
      return tie;
    }
    if (computerSelection == "paper") {
      console.log("you lose, paper beats rock!");
      return lose;
    }
    if (computerSelection == "scissors") {
      console.log("you win, rock beats scissors!");
      return win;
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "paper") {
      console.log("its a tie!");
      return tie;
    }
    if (computerSelection == "rock") {
      console.log("you win, paper beats rock!");
      return win;
    }
    if (computerSelection == "scissors") {
      console.log("you lose, scissors beats paper!");
      return lose;
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "scissors") {
      console.log("its a tie!");
      return tie;
    }
    if (computerSelection == "rock") {
      console.log("you lose, rock beats scissors!");
      return lose;
    }
    if (computerSelection == "paper") {
      console.log("you win, scissors beats paper!");
      return win;
    }
  }
}

function game() {
  let playerPoints = 0;
  let computerPoints = 0;
  for (let i = 0; i < max; i++) {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();

    let ptg = playRound(playerSelection, computerSelection); //(p)oints (t)o (g)ive
    if (ptg == 1) {
      computerPoints++;
    }
    if (ptg == 2) {
      playerPoints++;
    }
    if (playerPoints == 5 || computerPoints ==5) {
      break;
    }
   
  }

  if (playerPoints > computerPoints) {
    console.log(
      "you win! " + "you: " + playerPoints + " computer:" + computerPoints
    );
  } else {
    console.log(
      "you lose! " + "you: " + playerPoints + " computer:" + computerPoints
    );
  }

  return;
}

game();