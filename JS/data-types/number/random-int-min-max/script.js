'use strict';

alert( randomInteger(1, 5) );
alert( randomInteger(1, 5) );
alert( randomInteger(1, 5) );

function randomInteger(min, max) {

  return Math.floor((Math.random() * (max + 1 - min) + min));

}