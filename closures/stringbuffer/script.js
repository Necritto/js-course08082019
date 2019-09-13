'use strict';

function makeBuffer() {
    let currentResult = '';
    
    return function buffer(value) {
        if ( value === undefined ) {
            value = '';
            return currentResult += value;
        }
        return currentResult += value;
    }
}

let buffer = makeBuffer();

buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

alert(buffer());
