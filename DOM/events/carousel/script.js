'use strict';

const previous = document.querySelector('.previous'),
  next = document.querySelector('.next'),
  ul = document.querySelector('ul'),
  li = document.querySelectorAll('li');

let width = 130,
  count = 3,
  position = 0;

previous.addEventListener('click', previousSlide);
next.addEventListener('click', nextSlide);

function previousSlide() {
  position += width * count;
  position = Math.min(position, 0);
  ul.style.marginLeft = position + 'px';
}

function nextSlide() {
  position -= width * count;
  position = Math.max(position, -width * (li.length - count));
  ul.style.marginLeft = position + 'px';
}