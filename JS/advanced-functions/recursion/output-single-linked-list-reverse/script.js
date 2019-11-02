'use strict';

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

printReverseListToLoop(list);
console.log('-------------------------');
printReverseListToRecursion(list);

function printReverseListToLoop(list) {
  let tmp = list;
  let arr = [];
  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }
  
  for (let item of arr.reverse()) {
    console.log(item);
  }
}

function printReverseListToRecursion(list) {
  if (list.next) {
    printReverseListToRecursion(list.next);
  }
  console.log(list.value);
}