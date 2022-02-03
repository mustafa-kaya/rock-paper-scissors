const buttons = document.querySelectorAll('button')

for(const button of buttons) {
  const buttonIcon = button.children[1];
  button.addEventListener('mouseenter', addAnimation);
  buttonIcon.addEventListener('animationend', removeAnimation);
}

function addAnimation(event) {
  const id = event.target.id;
  const buttonIcon = event.target.children[1]; 

  if( id === 'rock' ) {
    buttonIcon.classList.add('animate__animated', 'animate__shakeY');
  } else if ( id === 'paper') {
    buttonIcon.classList.add('animate__animated', 'animate__tada');
  } else if ( id === 'scissors') {
    buttonIcon.classList.add('animate__animated', 'animate__swing');
  }
}

function removeAnimation(event) {
  const id = event.target.parentElement.id;
  const buttonIcon = event.target;

  if( id === 'rock' ) {
    buttonIcon.classList.remove('animate__animated', 'animate__shakeY');
  } else if ( id === 'paper') {
    buttonIcon.classList.remove('animate__animated', 'animate__tada');
  } else if ( id === 'scissors') {
    buttonIcon.classList.remove('animate__animated', 'animate__swing');
  }
}


// Commit: Create computer hand side animation
// oncelikle bir loop olusturmam lazim ve bu  loop sirasiyla
// ikonlari degistirecek 

let computerButton = document.getElementById('computer');
let computerIconURL = computerButton.children[0].src

computerIconURL = computerIconURL.replace('rock', 'paper')


console.log(computerButton)

