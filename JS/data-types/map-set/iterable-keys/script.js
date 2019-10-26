'use strict';

let map = new Map();

map.set('name', 'John');

let keys = [...map.keys()];

keys.push('more');

alert(keys);