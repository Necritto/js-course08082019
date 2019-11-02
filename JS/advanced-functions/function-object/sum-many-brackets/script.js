'use strict';

alert(sum(1)(2));
alert(sum(5)(-1)(2));
alert(sum(6)(-1)(-2)(-3));
alert(sum(0)(1)(2)(3)(4)(5));

function sum(a) {

  let currentSum = a;

  function fn(b) {
    currentSum += b;
    return fn;
  }

  fn.toString = function () {
    return currentSum;
  };

  return fn;
}
