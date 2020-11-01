let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// generate a target
const generateTarget = () => {
  let randNum =Math.floor(Math.random() * 9);
  return randNum;
}

// compare guesses between human,computer and target
const compareGuesses = (human, computer, target) => {
  // alert if number is above 9
  if(humanScore < 9 || humanScore < 0){
    alert('Please try again. Enter number between 0 and 9');
  }
  let differenceHuman = Math.abs(human - target);
  let differenceComputer = Math.abs(computer - target);
  if(human === target ||  differenceHuman <= differenceComputer){
    return true;
  }else {
    return false;
  }
}

// update score 
const updateScore = (winner) => {
  if(winner === 'human'){
    humanScore += 1;
  }else if(winner === 'computer'){
    computerScore += 1;
  }
}

// keep track of rounds
const advanceRound = () => {
  currentRoundNumber += 1;
}




