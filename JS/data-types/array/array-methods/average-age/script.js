'use strict';

let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 29 };
let masha1 = { name: 'Маша', age: 29 };


let arr = [vasya, petya, masha, masha1];

alert(getAverageAge(arr));

function getAverageAge(arr) {
  return (arr.reduce((sum, current) => sum + current.age, 0) / arr.length);
}