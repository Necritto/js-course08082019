'use strict';

alert(sum(1)(2)); // 3
alert(sum(5)(-1)); // 4

function sum(a) {
    return (b) => {
        return a+b;
    };
}

