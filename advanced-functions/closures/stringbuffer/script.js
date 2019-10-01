'use strict';

function makeBuffer() {
    let currentResult = '';
    
    return function buffer(value = '') {
        if(!value) {
            return currentResult += value;
        }
        currentResult += value;
    };
}

let buffer = makeBuffer();

buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

alert(buffer());
