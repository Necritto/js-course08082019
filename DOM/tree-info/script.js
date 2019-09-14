'use strict';

const li = document.querySelectorAll('li');
const ul = document.querySelectorAll('ul');
let countLi = 0;


for (let data of li) { 
    alert(`${data.firstChild.textContent} : ${countLi}`)
}

