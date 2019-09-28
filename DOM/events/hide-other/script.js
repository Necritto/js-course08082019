'use strict';

const button = document.createElement('button'),
      div = document.createElement('div');
  
button.classList.add('button');
div.classList.add('text');

button.innerHTML = 'Tap to hide text underneath';
div.innerHTML = 'Text';

document.body.prepend(button, div);

button.addEventListener('click', hideText);

function hideText() {
  div.style.display = 'none';
}