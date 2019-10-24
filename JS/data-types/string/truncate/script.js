'use strict';

console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20));

console.log(truncate('Всем привет!', 20));

function truncate(str, maxLength) {
  return (str.length < maxLength) ? str : `${str.slice(0, (maxLength - 1))}…`;
}