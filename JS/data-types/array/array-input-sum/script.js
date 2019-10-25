'use strict';

alert(sumInput());

function sumInput() {

  let value;
  let arr = [];
  let sum = 0;

  while (true) {
    value = prompt('Input number', 0);

    if (isNaN(+value)
      || value === ''
      || value === null) {

      break;
    }
    arr.push(+value);
  }

  for (let item of arr) {
    sum += item;
  }
  
  return sum;
}