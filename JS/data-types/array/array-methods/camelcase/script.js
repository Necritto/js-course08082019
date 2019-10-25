'use strict';

console.log(camelize('background-color') === 'backgroundColor');
console.log(camelize('list-style-image') === 'listStyleImage');
console.log(camelize('-webkit-transition') === 'WebkitTransition');

function camelize(str) {
  return str.split('-')
  .map((item, index) => index === 0 ? item : item.toUpperCase()[0] + item.slice(1))
  .join('');
}