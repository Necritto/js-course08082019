'use strict';

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert(filtered);

alert(arr);

function filterRange(arr, a, b) {
  return arr.filter((item) => (item >= a && item < b));
}
