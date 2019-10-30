'use strict';

console.log(getLastDayOfMonth(2012, 1));
console.log(getLastDayOfMonth(2013, 1));
console.log(getLastDayOfMonth(2019, 10));

function getLastDayOfMonth(year, month) {
  return (new Date(year, month + 1, 0).getDate());
}
