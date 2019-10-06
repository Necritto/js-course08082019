'use strict';

const thumbs = document.querySelector('#thumbs');
let largeImg = document.querySelector('#largeImg');

thumbs.addEventListener('click', changeLargeImg);

function changeLargeImg(event) {
  let elem = event.target.closest('a');

  if(elem && thumbs.contains(elem)) {
    showLargeImg(elem);
  }
}

function showLargeImg(elem) {
  largeImg.src = elem.getAttribute('href');
  event.preventDefault();
}