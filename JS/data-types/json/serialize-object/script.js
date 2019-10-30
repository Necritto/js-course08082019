'use strict';

let user = {
  name: 'Василий Иванович',
  age: 35
};

let userFromJSON = JSON.parse(JSON.stringify(user));

console.log(userFromJSON);