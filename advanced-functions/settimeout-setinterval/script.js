'use strict';

  // setInterval implementation

function printNumbers(from, to) {

  let currentFrom = from;
  let interval = setInterval(() => {
    console.log(currentFrom);
    if (currentFrom === to) {
      clearInterval(interval);
    }
    currentFrom++;
  }, 1000);
}

printNumbers(5, 10);