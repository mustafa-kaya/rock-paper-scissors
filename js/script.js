const buttons = document.querySelectorAll('button');

for (const button of buttons) {
  const buttonIcon = button.children[1];
  button.addEventListener('mouseenter', addAnimation);
  buttonIcon.addEventListener('animationend', removeAnimation);
  button.addEventListener('click', playRound);
}

function playRound(event) {
  let playerWeapon = getPlayerWeapon(event);
  let computerWeapon = getComputerWeapon();
  let roundWinner = getRoundWinner(playerWeapon, computerWeapon);
  updateScore(roundWinner);
}