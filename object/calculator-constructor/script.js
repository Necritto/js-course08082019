'use strict';

let calculator = new Calculator();
calculator.read();

alert(`Sum= ${calculator.sum()}`);
alert(`Mul= ${calculator.mul()}`);

function Calculator() {

  this.read = function () {
    this.a = +prompt('Input first number', 0);
    this.b = +prompt('Imput second number', 0);
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };
}