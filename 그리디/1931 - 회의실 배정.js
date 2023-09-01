const fs = require('fs');
const input = fs
  .readFileSync('./그리디/1931input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const n = +input[0];
const rooms = input.slice(1).map((i) => i.split(' ').map(Number));
let result = 0;
let start = 0;

rooms.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
});

rooms.map((room) => {
  const [s, e] = room;
  if (s >= start) {
    start = e;
    result += 1;
  }
});

console.log(result);
