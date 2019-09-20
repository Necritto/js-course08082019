'use strict';

f = makeCaching(f);

let a, b;

a = f(1);
b = f(1);
alert(a == b);

b = f(2);
alert(a == b);


function f(x) {
  return Math.random() * x;
}

function makeCaching(f) {
  let cache = new Map;
  return function (x) {

    if (cache.has(x)) {
      return cache.get(x);
    }

    const result = f.call(this, x);
    cache.set(x, result);

    return result;
  }
}