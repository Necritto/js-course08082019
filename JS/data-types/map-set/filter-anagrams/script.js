'use strict';

let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

alert(aclean(arr));

function aclean(arr) {
  let map = new Map();

  for (let item of arr) {
    let sortItem = item
      .toLowerCase()
      .split('')
      .sort()
      .join('');

    map.set(sortItem, item);
  }

  return [...map.values()];
}