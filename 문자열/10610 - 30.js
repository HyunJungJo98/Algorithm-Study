const fs = require('fs');
const { exit } = require('process');
const input = fs
  .readFileSync('./문자열/10610input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const num = input[0];
const sorted = num.split('').sort((a, b) => b - a);

const sum = sorted.reduce((prev, cur) => {
  prev += Number(cur);
  return prev;
}, 0);

if (sum % 3 !== 0 || sorted[sorted.length - 1] !== '0') {
  console.log(-1);
  return;
}

console.log(sorted.join(''));
