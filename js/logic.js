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
  } else if (roundWinner === 'Computer') {
    document.getElementById('computer-score').textContent = computerScore + 1
  }
}