'use strict';

console.log(getSecondsToTomorrow());

function getSecondsToTomorrow() {
  let today = new Date();
  let tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);

  return Math.round((tomorrow - today) / 1000);
}