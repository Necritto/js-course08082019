'use strict';

const li = document.querySelectorAll('li');

for (let value of li) {
  alert(`${value.firstChild.data.trim()} : ${value.querySelectorAll('li').length}`);
}