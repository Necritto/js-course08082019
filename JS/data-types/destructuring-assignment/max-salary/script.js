'use strict';

let salaries = {
  'John': 100,
  'Pete': 300,
  'Mary': 250
};

console.log(topSalary(salaries));

function topSalary(obj) {

  let maxSalaryName = null;
  let cacheSalary = 0;

  for (let [name, salary] of Object.entries(obj)) {
    if (cacheSalary < salary) {
      cacheSalary = salary;
      maxSalaryName = name;
    }
  }
  return maxSalaryName;
}

