

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

function resetGame() {
  humanScore = 0;
  computerScore = 0;
}


let humanScore = 0;
let computerScore = 0

const btnRock = document.querySelector('#btn-rock')
const btnPaper = document.querySelector('#btn-paper')
const btnScissors = document.querySelector('#btn-scissors')

btnRock.addEventListener("click", () => {
  playRound('Rock', getComputerChoice());
});

btnPaper.addEventListener("click", () => {
  playRound('Paper', getComputerChoice());
});

btnScissors.addEventListener("click", () => {
  playRound('Scissors', getComputerChoice());
});


function playRound(hChoice, cChoice) {

  const humanChoice = hChoice
  const computerChoice = cChoice

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

  //Checking results:
  console.log(`User Score: ${humanScore}`);
  console.log(`Computer Score: ${computerScore}`);

  //Declaring a winner and reset the game
  if(humanScore >= 5 || computerScore >= 5) {

    if(humanScore > computerScore) {
      console.log(`You won the game! You scored ${humanScore} and computer scored ${computerScore}`)
    }
    else {
      console.log(`You lost the game! You scored ${humanScore} and computer scored ${computerScore}`)
    }

    resetGame();
  }

}




