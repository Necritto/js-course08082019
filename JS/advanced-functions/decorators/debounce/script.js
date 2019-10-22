'use strict';

let f = debounce(alert, 1000);

f(1);
f(2);

setTimeout( () => f(3), 100);
setTimeout( () => f(4), 1100);
setTimeout( () => f(5), 1500);

function debounce(f, ms) {
  let wait = false;

  return function(...args) {
    if(wait) return;

    f.call(this, ...args);

    wait = true;

    setTimeout(() => wait = false, ms);
  }
}