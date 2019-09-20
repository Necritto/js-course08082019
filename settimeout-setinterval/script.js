'use strict';

function printNumbers(from, to) {
  // setInterval implementation

  let interval = setInterval(() => {
    console.log(`setInterval: ${Math.random() * 2}`);
  }, from);
  
  setTimeout(() => {
    clearInterval(interval);
  }, to);

  // setTimeout implementation
  
  let timeout = setTimeout(function tick() {
    console.log(`setTimeout: ${Math.random() * 1}`);
    timeout = setTimeout(tick, from);
  }, from);

  setTimeout(() => {
    clearTimeout(timeout);
  }, to);
}

printNumbers(1000, 5000);