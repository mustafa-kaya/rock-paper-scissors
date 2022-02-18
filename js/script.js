const buttons = document.querySelectorAll('button');

for(const button of buttons) {
  const buttonIcon = button.children[1];
  button.addEventListener('mouseenter', addAnimation);
  buttonIcon.addEventListener('animationend', removeAnimation);
}