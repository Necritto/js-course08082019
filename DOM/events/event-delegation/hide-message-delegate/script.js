'use strict';

const container = document.querySelector('.container');

container.addEventListener('click', removeMessage);

function removeMessage(event) {
  let elem = event.target;

  if (elem.className != 'remove-button') {
    return;
  }

  elem.parentNode.remove();
}