'use strict';

console.log(`${getMaxSubSum([-1, 2, 3, -9])}  = '5'`);
console.log(`${getMaxSubSum([2, -1, 2, 3, -9])} = '6'`);
console.log(`${getMaxSubSum([-1, 2, 3, -9, 11])} = '11'`);
console.log(`${getMaxSubSum([-2, -1, 1, 2])} = '3'`);
console.log(`${getMaxSubSum([100, -9, 2, -3, 5])} = '100'`);
console.log(`${getMaxSubSum([1, 2, 3])} = '6'`);
console.log(`${getMaxSubSum([-1, -2, -3])} = '0'`);

function getMaxSubSum(arr) {
  let total = 0;
  let subtotal = 0;

  for (let item of arr) {
    subtotal += item;
    total = Math.max(total, subtotal);
    if (subtotal < 0) {
      subtotal = 0;
    }
  }

  return total;
}