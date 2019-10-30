'use strict';

console.log(getSecondsToday());

function getSecondsToday() {
  let seconds = new Date();
  return (3600 * seconds.getHours()) + (60 * seconds.getMinutes()) + seconds.getSeconds();
}