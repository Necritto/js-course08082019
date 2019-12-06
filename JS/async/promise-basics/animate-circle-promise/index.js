'use strict';

document.body.insertAdjacentHTML('beforebegin', '<button class="btn">Click me</button>');

const btn = document.querySelector('.btn');

btn.addEventListener('click', go);

function go() {
  showCircle(150, 150, 100).then(div => {
    div.classList.add('message-ball');
    div.append('Hello, world!');
  });
}

function showCircle(cx, cy, radius) {
  let div = document.createElement('div');
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + 'px';
  div.style.top = cy + 'px';
  div.classList.add('circle');
  document.body.append(div);

  return new Promise((resolve) => {
    setTimeout(() => {
      div.style.width = radius * 2 + 'px';
      div.style.height = radius * 2 + 'px';

      div.addEventListener('transitionend', function handler() {
        div.removeEventListener('transitionend', handler);
        resolve(div);
      });
    });
  });
}