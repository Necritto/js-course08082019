'use strict';

let log = [];

work = makeLogging(work, log);

work(1);
work(5);

for (let i = 0; i < log.length; i++) {
  alert(`Лог: ${log[i]}`);
}

function work(a) {}

function makeLogging(f, log) {
  return function (...args) {

    const result = f.call(this, ...args);
    const logging = log.push(...args);

    return result;
  }
}