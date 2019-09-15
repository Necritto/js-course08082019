'use strict';

for (let li of document.querySelectorAll('li')) {
  if (li.querySelectorAll('li').length !== 0) {
    li.firstChild.data += `[${li.querySelectorAll('li').length}]`; 
  }
}