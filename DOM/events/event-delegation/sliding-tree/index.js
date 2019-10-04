'use strict';

const wrapper = document.querySelector('.wrapper');

for (let li of document.querySelectorAll('li')) {
  const span = document.createElement('span');
  li.prepend(span);
  span.append(span.nextSibling);
}

wrapper.addEventListener('click', slidingList);

function slidingList(event) {
  let elem = event.target;

  if (elem.tagName !== 'SPAN') return;

  for (let item of elem.parentElement.children) {
    if (item.nodeName === 'UL') {
      item.classList.toggle('hide');
    }
  }
}