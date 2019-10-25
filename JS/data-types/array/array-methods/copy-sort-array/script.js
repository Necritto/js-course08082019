'use strict';

let arr = ['HTML', 'JavaScript', 'CSS'];

let sorted = copySorted(arr);

alert(sorted);
alert(arr);

function copySorted(arr) {
  return arr.slice().sort();
}