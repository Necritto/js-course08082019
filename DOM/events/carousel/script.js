'use strict';

let i = 1;
for (let li of document.querySelectorAll('li')) {
  li.style.position = 'relative';
  li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
  i++;
}

const previous = document.querySelector('.previous'),
  next = document.querySelector('.next'),
  img = document.querySelectorAll('img');
let index = 0;

previous.addEventListener('click', previousSlide);
next.addEventListener('click', nextSlide);

function previousSlide() {
  img[index].style.display = 'none';
  index--;
  if(index <= 0) {
    index = img.length - 1;
  }
  img[index].style.display = 'block';
}

function nextSlide() {
  img[index].style.display = 'none';
  index++;
  if(index >= img.length) {
    index = 0;
  }
  img[index].style.display = 'block';
}