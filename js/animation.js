function addAnimation(event) {
  const id = event.target.id;
  const buttonIcon = event.target.children[1];

  if (id === 'rock') {
    buttonIcon.classList.add('animate__animated', 'animate__shakeY');
  } else if (id === 'paper') {
    buttonIcon.classList.add('animate__animated', 'animate__tada');
  } else if (id === 'scissors') {
    buttonIcon.classList.add('animate__animated', 'animate__swing');
  }
}

function removeAnimation(event) {
  const id = event.target.parentElement.id;
  const buttonIcon = event.target;

  if (id === 'rock') {
    buttonIcon.classList.remove('animate__animated', 'animate__shakeY');
  } else if (id === 'paper') {
    buttonIcon.classList.remove('animate__animated', 'animate__tada');
  } else if (id === 'scissors') {
    buttonIcon.classList.remove('animate__animated', 'animate__swing');
  }
}

function createComputerButtonAnimation() {
  let computerButton = document.getElementById('computer');
  const weapons = ['rock', 'paper', 'scissors'];

  for (let i = 0; i < 100; i++) {
    let index = i % weapons.length;
    setTimeout(() => {
      computerButton.children[0].src = computerButton.children[0].src.replace(/rock|paper|scissors/, `${weapons[index]}`);
    }, (450 + (450 * i)))
  }
}