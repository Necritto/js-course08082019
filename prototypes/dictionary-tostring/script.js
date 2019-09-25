'use strict';

let dictionary = Object.create(null);

dictionary.toString = function () {
  return Object.keys(dictionary).join(',');
};

Object.defineProperty(dictionary, 'toString', {
  enumerable: false
});

dictionary.apple = 'Apple';
dictionary.__proto__ = 'test';

for (let key in dictionary) {
  alert(key);
}

alert(dictionary);