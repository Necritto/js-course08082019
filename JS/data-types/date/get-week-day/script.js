'use strict';

let date = new Date(2012, 0, 3);
alert(getWeekDay(date));

function getWeekDay(date) {
  let day = {
    1: 'ПН',
    2: 'ВТ',
    3: 'СР',
    4: 'ЧТ',
    5: 'ПТ',
    6: 'СБ',
    0: 'ВС'
  };

  return day[date.getDay()];
}