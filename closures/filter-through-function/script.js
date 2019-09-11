'use strict';

function inBetween(a, b) {
    return function() {
        for( let i of arr) {
            ( i >= a && i <= b ) ? true : false;
        }
    }
}

function inArray(arr) {
    return function() {
        for( let k of newArr) {
            ( arr.indexOf(k) != -1 ) ? true : false;
        }
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2
