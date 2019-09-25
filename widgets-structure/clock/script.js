'use strict';

let clock = new Clock({
  'elem': document.querySelector('div')
});

clock.start();
clock.stop();

function Clock(options) {

  let elem = options.elem,
    timer;

  function render() {
    let date = new Date();

    let hour = date.getHours();
    if(hour < 10) {
      hour = '0' + hour;
    }
    elem.querySelector('.hour').innerHTML = hour;

    let min = date.getMinutes();
    if(min < 10) {
      min = '0' + min;
    }
    elem.querySelector('.min').innerHTML = min;

    let sec = date.getSeconds();
    if(sec < 10) {
      sec = '0' + sec;
    }
    elem.querySelector('.sec').innerHTML = sec;
  }

  function start() {
    render();
    timer = setInterval(render);
  }

  function stop() {
    clearInterval(timer);
  }

  this.start = start;
  this.stop = stop;
}