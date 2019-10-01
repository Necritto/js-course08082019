'use strict';

// setTimeout implementation

function printNumbers(from, to) {

  let currentFrom = from;

  setTimeout(function timer() {
    if(currentFrom <= to) {
      console.log(currentFrom);
      setTimeout(timer, 1000);
    }
    currentFrom++;
  }, 1000);
}

printNumbers(5, 10);