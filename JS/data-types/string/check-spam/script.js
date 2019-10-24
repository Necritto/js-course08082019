'use strict';

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));

function checkSpam(str) {
  let lowStr = str.toLowerCase();
  
  return lowStr.includes('viagra') || lowStr.includes('xxx');
  
}