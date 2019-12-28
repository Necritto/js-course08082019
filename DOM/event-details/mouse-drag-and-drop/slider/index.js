'use strict';

const slider = document.querySelector('.slider');
const thumb = document.querySelector('.thumb');

thumb.addEventListener('mousedown', function (e) {
  e.preventDefault();

  let shiftX = e.clientX - thumb.getBoundingClientRect().left;

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

  function onMouseMove(e) {
    let newLeft = e.clientX - shiftX - slider.getBoundingClientRect().left;
    if (newLeft < 0) {
      newLeft = 0;
    }
    let rightEdge = slider.offsetWidth - thumb.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    thumb.style.left = newLeft + 'px';
  }

  function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
  }
});

thumb.addEventListener('dragstart', function () {
  return false;
});