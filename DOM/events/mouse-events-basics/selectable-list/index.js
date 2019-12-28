'use strict';

const ul = document.querySelector('.ul');
const li = document.querySelectorAll('li');

ul.addEventListener('click', (e) => {
  if (e.target.nodeName !== 'LI') {
    return;
  }
  if (e.ctrlKey || e.metaKey) {
    togglePrint(e.target);
  } else {
    singlePrint(e.target);
  }
  return;
});

ul.onmousedown = function () {
  return false;
};

function togglePrint(elem) {
  elem.classList.toggle('selected');
}

function singlePrint(elem) {
  for (let item of li) {
    if (item.classList.contains('selected')) {
      item.classList.remove('selected');
    }
    elem.classList.add('selected');
  }
}