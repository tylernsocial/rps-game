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
  const TIE = 0;
  const WIN = 2;
  const LOSE = 1;

  if (playerSelection === computerSelection) {
    console.log("It's a tie!");
    return TIE;
  }

  switch (playerSelection) {
    case "rock":
      if (computerSelection === "paper") {
        console.log("You lose, paper beats rock!");
        return LOSE;
      } else {
        console.log("You win, rock beats scissors!");
        return WIN;
      }

    case "paper":
      if (computerSelection === "scissors") {
        console.log("You lose, scissors beats paper!");
        return LOSE;
      } else {
        console.log("You win, paper beats rock!");
        return WIN;
      }

    case "scissors":
      if (computerSelection === "rock") {
        console.log("You lose, rock beats scissors!");
        return LOSE;
      } else {
        console.log("You win, scissors beats paper!");
        return WIN;
      }

    default:
      console.log("Invalid selection!");
      break;
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