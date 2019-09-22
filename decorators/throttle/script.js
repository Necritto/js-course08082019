'use strict';

function f(a) {
  console.log(a);
}

let f1000 = throttle(f, 1000);

f1000(1);
f1000(2);
f1000(3);

function throttle(f, ms) {

  let isTrottled = false,
    savedArgs,
    savedThis;

  function container(...args) {

    if (isTrottled) {
      savedArgs = [...args];
      savedThis = this;
      return;
    }

    f.apply(this, [...args]);
    isTrottled = true;

    setTimeout(function () {
      isTrottled = false;
      if (savedArgs) {
        container.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }
  return container;
}