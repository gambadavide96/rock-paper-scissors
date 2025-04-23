

function capitalize(str) {

  let UpperFirstLetter = str.charAt(0).toUpperCase()

  let subString = str.substring(1)
  subString = subString.toLowerCase()

  return UpperFirstLetter.concat(subString)
}


function getComputerChoice() {

  //Return 0 , 1 or 2
  let choiceNumber = Math.floor(Math.random() * 3);
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

const btnRock = document.querySelector('#btn-rock')
const btnPaper = document.querySelector('#btn-paper')
const btnScissors = document.querySelector('#btn-scissors')

function playGame() {

  let humanScore = 0;
  let computerScore = 0

  function playRound(hChoice, cChoice) {

    const humanChoice = capitalize(hChoice)
    const computerChoice = capitalize(cChoice)
  
    if (humanChoice === "Rock") {
  
      if(computerChoice === "Scissors") {
        humanScore += 1;
        console.log(`You Win! You chose ${humanChoice} and computer chose ${computerChoice}`)
      } 
      else if (computerChoice === "Rock") {
        console.log(`A tie! You chose ${humanChoice} and the computer chose ${computerChoice}`)
      }
      else {
        computerScore += 1;
        console.log(`You Lose! Computer chose ${computerChoice} and you chose ${humanChoice}`)
      }
  
    } 
  
    else if (humanChoice === "Paper") {
  
      if(computerChoice === "Rock") {
        humanScore += 1;
        console.log(`You Win! You chose ${humanChoice} and computer chose ${computerChoice}`)
      } 
      else if (computerChoice === "Paper") {
        console.log(`A tie! You chose ${humanChoice} and the computer chose ${computerChoice}`)
      }
      else {
        computerScore += 1;
        console.log(`You Lose! Computer chose ${computerChoice} and you chose ${humanChoice}`)
      }
  
    }
  
    //humanChoice is Scissors
    else {
  
      if(computerChoice === "Paper") {
        humanScore += 1;
        console.log(`You Win! You chose Scissors and computer chose ${computerChoice}`)
      } 
      else if (computerChoice === "Scissors") {
        console.log(`A tie! You chose Scissors and the computer chose ${computerChoice}`)
      }
      else {
        computerScore += 1;
        console.log(`You Lose! Computer chose ${computerChoice} and you chose Scissors`)
      }
  
    }
  
  }

  playRound(getHumanChoice(),getComputerChoice())

  if(humanScore > computerScore) {
    console.log(`You won the game! You scored ${humanScore} and computer scored ${computerScore}`)
  }
  else if(computerScore > humanScore) {
    console.log(`You lost the game! You scored ${humanScore} and computer scored ${computerScore}`)
  }
  else {
    console.log(`A Tie game! You scored ${humanScore} and computer scored ${computerScore}`)
  }


}


playGame()


