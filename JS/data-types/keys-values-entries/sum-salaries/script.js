'use strict';

let salaries = {
  'John': 100,
  'Pete': 300,
  'Mary': 250
};

alert(sumSalaries(salaries));

function sumSalaries(obj) {
  let salary = 0;
  for (let item of Object.values(obj)) {
    salary += item;
  }
  return salary;
}