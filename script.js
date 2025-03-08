

function getComputerChoice() {

  //Return 0 , 1 or 2
  choiceNumber = Math.floor(Math.random() * 3);
  let result;

  switch (choiceNumber) {
    case 0:
      result = "Rock"
      break;
    case 1:
      result = "Paper"
      break;
    case 2:
      result = "Scissors"
  }
  return computerChoice
}

function getHumanChoice() {
  humanChoice = prompt("Insert 'Rock', 'Paper' or 'Scissors'.");
  return humanChoice;
}



