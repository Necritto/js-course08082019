'use strict';

Function.prototype.defer = function(ms) {
  setTimeout(() => {
    return f.call(this, arguments);
  }, ms);
};

function f() {
  alert('Hello!');
}

console.dir(f);
f.defer(1000);