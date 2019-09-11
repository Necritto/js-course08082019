'use strict';

function inBetween(a, b) {
    return (value) => {
       return ( value >= a && value <= b );
    }
}

function inArray(arr) {
    return (value) => {
        for( let i of arr ) {
            return arr.includes(value);
        }
    
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2
