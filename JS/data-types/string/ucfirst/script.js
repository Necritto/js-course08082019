'use strict';

ucFirst('вася');

function ucFirst(str) {
  if (!str) {
    return str;
  }

  alert(str[0].toUpperCase() + str.slice(1));
}