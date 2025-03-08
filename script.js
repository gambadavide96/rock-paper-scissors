

function getComputerChoice() {

  //Return 0 , 1 or 2
  numChoice = Math.floor(Math.random() * 3)

  if (numChoice === 0) {
    return "Rock"
  } else if(numChoice === 1) {
    return "Paper"
  } else {
    return "Scissors"
  }
  
}

test = getComputerChoice()
console.log(test)