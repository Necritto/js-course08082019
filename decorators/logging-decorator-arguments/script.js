'use strict';

let log = [];
work = makeLogging(work, log);

work(1, 2);
work(4, 5);

for (let i = 0; i < log.length; i++) {
  let args = log[i];
  alert(`Лог: ${args.join(', ')}`);
}

function work(a, b) {
  alert(a + b);
}

function makeLogging(f, log) {
  return function (...args) {
    const result = f.call(this, ...args);
    const logging = log.push([].slice.apply([...args]));
    
    return result;
  }
}