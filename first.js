const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'paper' || userInput === 'scissors' || userInput === 'rock' || userInput === 'bomb'){
    return userInput 
  } else {
    console.log('Error!!! Please type rock, paper or scissors');
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'scissors';
    case 1:
      return 'paper';
    case 2:
      return 'rock';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game is a tie!';
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'rock'){
      return 'Congratulation you won!';
    } else {
      return 'Sorry, you lost lol'
    }
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'scissors'){
      return 'Congrajulations';
    } else {
      return 'You lost LMAO';
    }
  }
  if (userChoice === 'scissors'){
    if (computerChoice === 'paper') {
      return 'Nice shit nigga, you won!';
    } else {
      return 'Loser LMAO';
    }
  }
  if (userChoice === 'bomb'){
    return 'You are a motherfucker.... You Won'
  }
};

const playGame = () => {
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice))
};

playGame();
