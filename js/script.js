const buttons = document.querySelectorAll('button');

for (const button of buttons) {
  const buttonIcon = button.children[1];
  button.addEventListener('mouseenter', addAnimation);
  buttonIcon.addEventListener('animationend', removeAnimation);
  button.addEventListener('click', createNewRound);
}

function createNewRound(event) {
  let playerWeapon = getPlayerWeapon(event);
  let computerWeapon = getComputerWeapon();
  let roundWinner = getRoundWinner(playerWeapon, computerWeapon);

  updateScore(roundWinner);
  viewPlayerSelection(event, roundWinner);
  hideOtherSelections(event);
  viewComputerSelection(computerWeapon);
  viewRoundResult(roundWinner)
  checkScore()
  setTimeout(() => resetRound(), 3000)
}

