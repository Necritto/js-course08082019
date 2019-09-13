'use strict';

function makeBuffer() {
    let currentResult = '';

    return function buffer(value) {
        if ( value === undefined ) {
            value = '';
            return currentResult += value;
        }
        buffer.clear = () => {
            return currentResult = '';
        }
        return currentResult += value;
    }
}

let buffer = makeBuffer();

buffer("Тест");
buffer(" тебя не съест ");
alert( buffer() );

buffer.clear();

buffer(null);

alert( buffer() );