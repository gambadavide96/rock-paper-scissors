
let humanScore = 0;
let computerScore = 0


function getComputerChoice() {

  //Return 0 , 1 or 2
  choiceNumber = Math.floor(Math.random() * 3);
  let computerChoice;

  switch (choiceNumber) {
    case 0:
      computerChoice = "Rock"
      break;
    case 1:
      computerChoice = "Paper"
      break;
    case 2:
      computerChoice = "Scissors"
  }
  return computerChoice
}

function getHumanChoice() {
  const humanChoice = prompt("Insert 'Rock', 'Paper' or 'Scissors'.");
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {

  const humanChoice = humanChoice.toLowerCase()
  const computerChoice = computerChoice.toLowerCase()

  if (humanChoice === "rock") {

    if(computerChoice === "paper") {
      humanScore += 1;
      console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
    } 
    else if (computerChoice === "paper") {
      //Pareggio
    }

  } 

  else if (humanChoice === "paper") {

  }

  //humanChoice is scissors
  else {

  }

}

