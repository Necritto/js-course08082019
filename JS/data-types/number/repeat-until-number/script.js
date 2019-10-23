'use strict';

readNumber();

function readNumber() {
  while (true) {
    let num = prompt('Number', 0);

    if (num === '' || num === null) {
      alert('Cancel');
      break;
    }

    if (!isNaN(+num)) {
      alert(`Number: ${num}`);
      break;
    }
  }
}