'use strict';

const menu = document.querySelector('.menu'),
  title = document.querySelector('.title');

title.addEventListener('click', function () {
  menu.classList.toggle('open');
});