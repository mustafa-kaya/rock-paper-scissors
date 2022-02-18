// This function create only 0,1 or 2 randomly.
function createRandomIndex() {
  return Math.floor(Math.random()*3);
}

function computerPlay() {
  let index = createRandomIndex();

  switch(index) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}

function playerPlay() {
  let playerAnswer;
  let i = true;

  while (i) {
    playerAnswer = prompt(`Choose your weapon [ROCK]-[PAPER]-[SCISSORS]`, '').toLowerCase().trim();
    if( playerAnswer === 'rock' || playerAnswer === 'paper' || playerAnswer === 'scissors') {
      return playerAnswer;
      i = false;
    } else {
      alert('Please choose your weapon correctly. Again ->');
    }
  }
}

function playRound(playerSelection, computerSelection) {
  if( playerSelection === 'rock' ) {
    if( computerSelection === 'rock' ) {
      return 'tie';
    } else if ( computerSelection === 'paper' ) {
      return 'computer';
    } else if ( computerSelection === 'scissors' ) {
      return 'player';
    }
  } else if( playerSelection === 'paper' ) {
    if( computerSelection === 'rock' ) {
      return 'player';
    } else if( computerSelection === 'paper') {
      return 'tie';
    } else if( computerSelection === 'scissors' ) {
      return 'computer';
    }
  } else if( playerSelection === 'scissors' ) {
    if( computerSelection === 'rock' ) {
      return 'computer';
    } else if( computerSelection === 'paper' ) {
      return 'player';
    } else if( computerSelection === 'scissors') {
      return 'tie';
    }
  }
}

function game() {
  let playerSelection;
  let computerSelection;
  let playerScore = 0;
  let computerScore = 0;
  let roundWinner;

  while( !(computerScore === 5 || playerScore === 5) ) {
    playerSelection = playerPlay();
    computerSelection = computerPlay();
    roundWinner = playRound(playerSelection, computerSelection);

    if ( roundWinner === 'computer' ) {
      computerScore++;
    } else if( roundWinner === 'player' ) {
      playerScore++;
    }

    console.log(`PLAYER ${playerSelection} : ${computerSelection} COMPUTER`)
    console.log(`PLAYER ${playerScore} : ${computerScore} COMPUTER`);
  }

  if( playerScore > computerScore ) {
    console.log('YOU WIN');
  } else {
    console.log('GAME OVER');
  }
}

game();
