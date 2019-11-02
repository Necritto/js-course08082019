'use strict';

alert(sumToLoop(100));
alert(sumToProgression(100));
alert(sumToRecursion(100));

// loop implementation

function sumToLoop(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

//  progression implementation

function sumToProgression(n) {
  return (n * (n + 1)) / 2;
}

// recursion implementation

function sumToRecursion(n) {
  return (n === 1) ? n : n + sumToRecursion(n - 1);
}