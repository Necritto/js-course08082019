'use strict';

const field = document.querySelector('.field'),
  ball = document.querySelector('#ball');

field.addEventListener('click', moveBall);

function moveBall(event) {

  const fieldCoords = field.getBoundingClientRect();

  const ballCoords = {
    left: event.clientX - fieldCoords.left - field.clientLeft - ball.offsetWidth / 2,
    top: event.clientY - fieldCoords.top - field.clientTop - ball.offsetHeight / 2
  };

  if (ballCoords.left < 0) {
    ballCoords.left = 0;
  }

  if (ballCoords.left + ball.clientWidth > field.clientWidth) {
    ballCoords.left = field.clientWidth - ball.clientWidth;
  }

  if (ballCoords.top < 0) {
    ballCoords.top = 0;
  }

  if (ballCoords.top + ball.clientHeight > field.clientHeight) {
    ballCoords.top = field.clientHeight - ball.clientHeight;
  }

  ball.style.left = ballCoords.left + 'px';
  ball.style.top = ballCoords.top + 'px';
}