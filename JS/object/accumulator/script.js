'use strict';

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);

function Accumulator(startingValue) {

  this.value = startingValue;

  this.read = function () {
    this.value += +prompt('Add number', 0);
  };

}