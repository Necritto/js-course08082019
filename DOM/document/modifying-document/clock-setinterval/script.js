'use strict';


let timer;

document.querySelector('.start').addEventListener('click', startClock),
document.querySelector('.stop').addEventListener('click', stopClock);

startClock();

function render() {
  let date = new Date();

  let hour = date.getHours();
  if(hour < 10) {
    hour = '0' + hour;
  }
  document.querySelector('.hour').innerHTML = hour;
  
  let min = date.getMinutes();
  if(min < 10) {
    min = '0' + min;
  }
  document.querySelector('.min').innerHTML = min;
  
  let sec = date.getSeconds();
  if(sec < 10) {
    sec = '0' + sec;
  }
  document.querySelector('.sec').innerHTML = sec;  
}

function startClock() {
  timer = setInterval(render, 1000);
  render();
}

function stopClock() {
  clearInterval(timer);
}