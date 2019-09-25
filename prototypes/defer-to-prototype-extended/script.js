'use strict';

Function.prototype.defer = function (ms) {
  return function(...args) {
    setTimeout(() => {
      f.call(this, ...args);
    }, ms);
  };
};

function f(a, b) {
  alert(a + b);
}

f.defer(1000)(1, 2);