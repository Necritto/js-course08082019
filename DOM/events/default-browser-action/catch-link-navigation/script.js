'use strict';

const contents = document.querySelector('#contents');

contents.addEventListener('click', catchReference);

function catchReference(event) {
  let elem = event.target.closest('a');

  if(elem && contents.contains(elem)) {
    handlerLink(elem.getAttribute('href'));
  }
}

function handlerLink(href) {
  let isLeaving = confirm(`Leave for ${href}`);
  if(!isLeaving) {
    return event.preventDefault();
  }
}
