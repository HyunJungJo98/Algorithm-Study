const fs = require('fs');
const input = fs
  .readFileSync('./구현/13460input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const board = input.slice(1).map((line) => line.split(''));

let cnt = 0;

const up = () => {
  console.log('up');
};
const down = () => {
  console.log('down');
};
const left = () => {
  console.log('left');
};
const right = () => {
  console.log('right');
};
