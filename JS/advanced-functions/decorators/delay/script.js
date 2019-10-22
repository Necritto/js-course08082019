'use strict';

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000('test');
f1500('test');

function f(x) {
  alert(x);
}

function delay(f, timeout) {
  return function (...args) {

    setTimeout(() => {
      const result = f.call(this, ...args);
      return result;
    }, timeout);

  };
}