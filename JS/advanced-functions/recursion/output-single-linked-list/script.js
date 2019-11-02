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

printListToLoop(list);
console.log('-------------------------');
printListToRecursion(list);

function printListToLoop(list) {
  let tmp = list;
  while (tmp) {
    console.log(tmp.value);
    tmp = tmp.next;
  }

}

function printListToRecursion(list) {
  console.log(list.value);
  if (list.next) {
    printListToRecursion(list.next);
  }
}