'use strict';

let values = ['Hare', 'Krishna', 'Hare', 'Krishna',
  'Krishna', 'Krishna', 'Hare', 'Hare', ':-O'
];

alert(unique(values));


function unique(arr) {
  return [...new Set(arr)];
}
