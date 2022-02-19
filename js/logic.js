// Only Return 0,1 or 2
function getRandomNumber() {
  return Math.floor(Math.random() * 3);
}

function getComputerWeapon() {
  let weapons = ['rock', 'paper', 'scissors']
  let index = getRandomNumber();
  return weapons[index];
}

function getPlayerWeapon(event) {
  return event.target.id
}

function getRoundWinner(playerWeapon, computerWeapon) {
  if (playerWeapon === 'rock') {
    if (computerWeapon === 'paper') {
      return 'Computer';
    } else if (computerWeapon === 'scissors') {
      return 'Player';
    } else {
      return 'Tie'
    }
  } else if (playerWeapon === 'paper') {
    if (computerWeapon === 'rock') {
      return 'Player'
    } else if (computerWeapon === 'scissors') {
      return 'Computer'
    } else {
      return 'Tie'
    }
  } else if (playerWeapon === 'scissors') {
    if (computerWeapon === 'paper') {
      return 'Player'
    } else if (computerWeapon === 'rock') {
      return 'Computer'
    } else {
      return 'Tie'
    }
  }
}

function updateScore(roundWinner) {
  let playerScore = Number(document.getElementById('player-score').textContent);
  let computerScore = Number(document.getElementById('computer-score').textContent);

  if (roundWinner === 'Player') {
    document.getElementById('player-score').textContent = playerScore + 1
  }
  else if (roundWinner === 'Computer') {
    document.getElementById('computer-score').textContent = computerScore + 1
  }
}

function viewPlayerSelection(event, roundWinner) {
  if (roundWinner === 'Player') {
    event.target.classList.add('button--won', 'button--disable')
  }
  else if (roundWinner === 'Computer') {
    event.target.classList.add('button--lost', 'button--disable')
  }
  else {
    event.target.classList.add('button--tie', 'button--disable')
  }
}

function hideOtherSelections(event) {
  let selection = event.target.id;
  let rock = document.getElementById('rock');
  let paper = document.getElementById('paper');
  let scissors = document.getElementById('scissors');

  if (selection === 'rock') {
    paper.classList.add('button--unselected', 'button--disable');
    scissors.classList.add('button--unselected', 'button--disable');
  }
  else if (selection === 'paper') {
    scissors.classList.add('button--unselected', 'button--disable');
    rock.classList.add('button--unselected', 'button--disable');
  }
  else if (selection === 'scissors') {
    rock.classList.add('button--unselected', 'button--disable');
    paper.classList.add('button--unselected', 'button--disable');
  }
}

function viewComputerSelection(computerWeapon) {
  let computerButton = document.getElementById('computer');
  if (computerWeapon === 'rock') {
    computerButton.children[0].src = computerButton.children[0].src.replace(/rock|paper|scissors/, 'rock');
    computerButton.children[1].textContent = 'ROCK';
  }
  else if (computerWeapon === 'paper') {
    computerButton.children[0].src = computerButton.children[0].src.replace(/rock|paper|scissors/, 'paper');
    computerButton.children[1].textContent = 'PAPER';
  }
  else if (computerWeapon === 'scissors') {
    computerButton.children[0].src = computerButton.children[0].src.replace(/rock|paper|scissors/, 'scissors');
    computerButton.children[1].textContent = 'SCISSORS';
  }
}

function resetRound() {
  let computerButton = document.getElementById('computer');
  let rock = document.getElementById('rock');
  let paper = document.getElementById('paper');
  let scissors = document.getElementById('scissors');

  rock.classList.remove('button--unselected', 'button--disable', 'button--won', 'button--tie', 'button--lost');
  paper.classList.remove('button--unselected', 'button--disable', 'button--won', 'button--tie', 'button--lost');
  scissors.classList.remove('button--unselected', 'button--disable', 'button--won', 'button--tie', 'button--lost');

  computerButton.children[0].src = computerButton.children[0].src.replace(/rock|paper|scissors/, 'rock');
  computerButton.children[1].textContent = '***';

  document.getElementsByClassName('info')[0].style.display = 'none'
  document.getElementsByClassName('info__subtext')[0].textContent = 'New Round in 3'
}

// kimin kazandigini burada karar verip
// 

function checkScore() {

  let totalScore = 3;

  let playerScore = Number(document.getElementById('player-score').textContent);
  let computerScore = Number(document.getElementById('computer-score').textContent);

  if (playerScore === totalScore || computerScore === totalScore) {
    if (playerScore > computerScore) {
      document.getElementsByClassName('result__text')[0].style.display = 'block'
      document.getElementsByClassName('result__text')[0].textContent = 'YOU WON'
    } else {
      document.getElementsByClassName('result__text')[0].style.display = 'block'
      document.getElementsByClassName('result__text')[0].textContent = 'GAME OVER'
    }
    document.getElementsByClassName('game')[0].style.display = 'none'
    document.getElementsByClassName('info')[0].style.display = 'none'
  }
}

function viewRoundResult(roundWinner) {
  document.getElementsByClassName('info')[0].style.display = 'flex'

  if (roundWinner === 'Player') {
    document.getElementsByClassName('info__text')[0].textContent = 'You Won Round';
  }
  else if (roundWinner === 'Computer') {
    document.getElementsByClassName('info__text')[0].textContent = 'You Lost Round';
  } else if (roundWinner === 'Tie') {
    document.getElementsByClassName('info__text')[0].textContent = 'Tie'
  }

  roundCountdown()
}

function roundCountdown() {
  setTimeout(() => {
    document.getElementsByClassName('info__subtext')[0].textContent = 'New Round in 2'
  }, 1000)
  setTimeout(() => {
    document.getElementsByClassName('info__subtext')[0].textContent = 'New Round in 1'
  }, 2000)
}
