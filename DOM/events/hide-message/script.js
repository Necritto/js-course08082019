'use strict';

const panes = document.querySelectorAll('.pane');

for (let pane of panes) {
  pane.insertAdjacentHTML('afterbegin', '<span>&#9746;</span>');
  pane.firstElementChild.addEventListener('click', () => pane.remove());
}