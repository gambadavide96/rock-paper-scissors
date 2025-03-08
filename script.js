

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


let humanScore = 0;
let computerScore = 0

