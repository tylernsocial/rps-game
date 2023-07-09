const choices = ["earth", "wind", "fire"];
const max = 9999999;
let userCounter = 0;
let comCounter = 0;
let outcome = "";

const scoreHead = document.getElementById("scoreHead");
const scoreMsg = document.getElementById("scoreMsg");

const userElement = document.getElementById("user-element");
const comElement = document.getElementById("com-element");

const userScore = document.getElementById("user-score");
const comScore = document.getElementById("com-score");

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");



rockBtn.addEventListener("click", () => eventHandler("earth"));
paperBtn.addEventListener("click", () => eventHandler("wind"));
scissorsBtn.addEventListener("click", () => eventHandler("fire"));


function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function eventHandler(playerSelection) {
  if (isGameOver()) {
    openEndScreen()
    return
  }
 
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  updateImg(playerSelection, computerSelection);
  updateScore();
  setTimeout(nextSelection, 1700);
  console.log(outcome);

  if (isGameOver()) {
    openEndScreen()
    setFinalMessage()
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    console.log("It's a tie!");
    //return TIE;
    outcome = "tie";
  } else {
    switch (playerSelection) {
      case "earth":
        if (computerSelection == "wind") {
          console.log("You lose, paper beats rock! ");
          //return LOSE;
          comCounter++;
          outcome = "com";
        } else {
          console.log("You win, rock beats scissors!");
          // return WIN;
          outcome = "player";
          userCounter++;
        }
        break;

      case "wind":
        if (computerSelection === "fire") {
          console.log("You lose, scissors beats paper!");
          //return LOSE;
          comCounter++;
          outcome = "com";
        } else {
          console.log("You win, paper beats rock!");
          //return WIN;
          outcome = "player";
          userCounter++;
        }
        break;

      case "fire":
        if (computerSelection === "earth") {
          console.log("You lose, rock beats scissors!");
          //return LOSE;
          comCounter++;
          outcome = "com";
        } else {
          console.log("You win, scissors beats paper!");
          // return WIN;
          outcome = "player";
          userCounter++;
        }
        break;

      default:
        console.log("Invalid selection!");
        break;
    }
  }
  updateMsg(playerSelection, computerSelection);
}

function updateImg(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "earth":
      userElement.src = "./assets/earth.png";
      break;
    case "wind":
      userElement.src = "./assets/wind.png";
      break;
    case "fire":
      userElement.src = "./assets/fire.png";
      break;
  }

  switch (computerSelection) {
    case "earth":
      comElement.src = "./assets/earth.png";
      break;
    case "wind":
      comElement.src = "./assets/wind.png";
      break;
    case "fire":
      comElement.src = "./assets/fire.png";
      break;
  }
}

function updateScore() {
  if (outcome == "tie") {
    scoreHead.textContent = "it's a tie do better";
  } else if (outcome == "player") {
    scoreHead.textContent = "you won, you did something for once!";
  } else if (outcome == "com") {
    scoreHead.textContent = "you lost, you failure 😂";
  }

  //todo add messasge
  userScore.textContent = "YOU: " + userCounter;
  comScore.textContent = "COM: " + comCounter;
}

function updateMsg(playerSelection, computerSelection) {
  if (outcome == "tie") {
    scoreMsg.textContent =
      playerSelection + " and " + computerSelection + " is a tie";
    return;
  }
  if (outcome == "player") {
    scoreMsg.textContent = playerSelection + " beats " + computerSelection;
    return;
  }
  if (outcome == "com") {
    scoreMsg.textContent = computerSelection + " beats " + playerSelection;
    return;
  }
}

function nextSelection(){
  userElement.src = "./assets/placehold.png";
  comElement.src = "./assets/placehold.png";
  scoreMsg.textContent = "❗please select your next choice❗";
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
  
}

function isGameOver() {
  return userCounter === 5 || comCounter === 5
}

const endScreen = document.getElementById('endScreen')
const endMsg = document.getElementById('endMsg')
const overlay = document.getElementById('overlay')
const restartBtn = document.getElementById('restartBtn')

restartBtn.addEventListener('click', restartGame)
overlay.addEventListener('click', closeEndScreen)

function openEndScreen() {
  endScreen.classList.add('active')
  overlay.classList.add('active')
}

function closeEndScreen() {
  endScreen.classList.remove('active')
  overlay.classList.remove('active')
}

function setFinalMessage() {
  if (userCounter > comCounter) {
    endMsg.textContent = 'You won somehow';
  } else {
    endMsg.textContent = 'You lost, do better next time';
  }
}

function restartGame(){
  userCounter = 0;
  comCounter = 0;
  scoreHead.textContent = "Choose your element!"
  scoreMsg.textContent = "Win 5 battles to win the game"
  userScore.textContent = "YOU: 0"
  comScore.textContent = "COM: 0"
  userElement.src = "./assets/placehold.png";
  comElement.src = "./assets/placehold.png";
  endScreen.classList.remove('active')
  overlay.classList.remove('active')
}