'use strict';

let schedule = {};

alert(isEmpty(schedule));

schedule['8:30'] = 'get up';

alert(isEmpty(schedule));

function isEmpty(obj) {
  for (let key in obj) {
    if (key) {
      return false;
    }
  }
  return true;
}