'use strict';

const coords = document.querySelector('#coords');
const field = document.querySelector('#field');

document.addEventListener('click', function (event) {
  coords.innerHTML = event.clientX + ':' + event.clientY;
});

const coordsTriangle = field.getBoundingClientRect();

console.log(`1: x= ${coordsTriangle.left}, y= ${coordsTriangle.top}`);
console.log(`2: x= ${coordsTriangle.right}, y= ${coordsTriangle.bottom}`);
console.log(`3: x= ${coordsTriangle.left + field.clientLeft}, y= ${coordsTriangle.top + field.clientTop}`);
console.log(`4: x= ${coordsTriangle.right - (field.offsetWidth - field.clientWidth) / 2}, y= ${
  coordsTriangle.bottom - (field.offsetHeight - field.clientHeight) / 2}`);