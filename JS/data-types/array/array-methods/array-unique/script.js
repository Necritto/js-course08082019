'use strict';

let strings = ['кришна', 'кришна', 'харе', 'харе',
  'харе', 'харе', 'кришна', 'кришна', ':-O'
];

alert(unique(strings));

function unique(arr) {
  let temp = [];
  for (let item of arr) {
    if (!temp.includes(item)) {
      temp.push(item);
    }
  }
  return temp;
}