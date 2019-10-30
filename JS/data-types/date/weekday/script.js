'use strict';

let date = new Date(2012, 0, 3);
alert(getLocalDay(date));

function getLocalDay(date) {
  return (date.getDay() === 0) ? 7 : date.getDay();
}