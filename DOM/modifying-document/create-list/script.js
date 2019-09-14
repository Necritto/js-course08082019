'use strict';

let ul = document.createElement('ul');
document.body.append(ul);

while (true) {
  let list = prompt('Введите текст для элемента списка', '');

  if (!list) {
    break;
  }

  ul.insertAdjacentHTML('beforeend', `<li>${list}</li>`);

}