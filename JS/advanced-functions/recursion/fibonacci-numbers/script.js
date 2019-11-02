'use strict';

console.log(fib(3));
console.log(fib(7));
console.log(fib(77));

function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

// function fibToRecursion(n) {
//   return (n <= 1) ? n : fib(n - 1) + fib(n - 2);
// }