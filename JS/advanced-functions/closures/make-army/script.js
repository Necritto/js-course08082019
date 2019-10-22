'use strict';

function makeArmy() {
    let shooters = [];
    let i = 0;

    while (i < 10) {
        let k = i;
        let shooter = function () {
            alert(k);
        };
        shooters.push(shooter);
        i++;
    }

    return shooters;

}

let army = makeArmy();

army[0]();
army[5]();