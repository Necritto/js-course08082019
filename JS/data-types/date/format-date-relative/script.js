'use strict';

alert(formatDate(new Date(new Date - 1)));

alert(formatDate(new Date(new Date - 30 * 1000)));

alert(formatDate(new Date(new Date - 5 * 60 * 1000)));

alert(formatDate(new Date(new Date - 86400 * 1000)));

function formatDate(date) {
  let difference = new Date() - date;
  let seconds = Math.round(difference / 1000);
  let minutes = Math.round(difference / 60000);
  let time = ['0' + date.getDate(),
              '0' + (date.getMonth() + 1),
               '' + date.getFullYear(),
              '0' + date.getHours(),
              '0' + date.getMinutes()].map(item => item.slice(-2));

  return (difference < 1000) ? 'Now' :
    (seconds < 60) ? `After ${seconds} seconds` :
    (minutes < 60) ? `After ${minutes} minutes` :
    `${time.slice(0, 3).join('.')} ${time.slice(3).join(':')}`;
}