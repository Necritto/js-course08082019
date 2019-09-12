'use strict';

function makeBuffer() {
    let currentResult = '';
    let arr = [];

    function setBuffer() {
        while (arguments > 0) {
            arr.push(currentResult);
        };
        return arr.split('');
    }

    return () => {
        return (arguments.length ? setBuffer() : currentResult);
    }
}

let buffer = makeBuffer();

buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

alert(buffer());