'use strict';

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);

alert(arr);

function filterRangeInPlace(arr, a, b) {
  return arr.splice(
    0,
    (arr.length),
    (arr.filter((item) => (item >= a && item <= b)))
  );
}