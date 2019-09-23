'use strict';

// setTimeout implementation

function printNumbers(from, to) {

  let currentFrom = from;

  let timeout = setTimeout(function timer() {
    console.log(currentFrom);
    timeout = setTimeout(timer, 1000);
  }, 1000);
  if (currentFrom < to) {
    clearTimeout(timeout);
  }
  currentFrom++;
}

printNumbers(5, 10);