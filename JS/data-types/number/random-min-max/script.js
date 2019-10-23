'use strict';

alert(random(1, 5));
alert(random(1, 5));
alert(random(1, 5));

function random(min, max) {

  return Math.random() * (max - min) + min;

}