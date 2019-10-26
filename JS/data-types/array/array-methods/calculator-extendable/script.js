'use strict';

let calc = new Calculator;

alert(calc.calculate('3 + 7'));

let powerCalc = new Calculator;
powerCalc.addMethod('*', (a, b) => a * b);
powerCalc.addMethod('/', (a, b) => a / b);
powerCalc.addMethod('**', (a, b) => a ** b);

let result = powerCalc.calculate('2 ** 3');
alert(result);

function Calculator() {

  this.methods = {
    '+': (firstNum, secondNum) => firstNum + secondNum,
    '-': (firstNum, secondNum) => firstNum - secondNum,
  };

  this.calculate = function (str) {

    let splitStr = str.split(' ').sort();
    let sign = splitStr[0];
    let firstNum = +splitStr[1];
    let secondNum = +splitStr[2];

    if (!this.methods[sign]
      || isNaN(firstNum)
      || isNaN(secondNum)) {

      return 'Error: enter two numbers';
    }

    return this.methods[sign](firstNum, secondNum);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}