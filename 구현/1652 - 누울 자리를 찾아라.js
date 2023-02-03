const fs = require('fs');
const input = fs
  .readFileSync('./구현/1652input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const n = +input[0];
const room = input.slice(1).map((line) => line.split(''));

let w = 0;
let h = 0;

for (let i = 0; i < n; i++) {
  let count = 0;
  let count2 = 0;
  for (let j = 0; j < n; j++) {
    if (room[i][j] === '.') {
      count++;
    } else {
      if (count > 1) {
        w++;
      }
      count = 0;
    }
  }
  if (room[i][n - 1] !== 'X' && count > 1) {
    w++;
  }
  for (let j = 0; j < n; j++) {
    if (room[j][i] === '.') {
      count2++;
    } else {
      if (count2 > 1) {
        h++;
      }
      count2 = 0;
    }
  }
  if (room[n - 1][i] !== 'X' && count2 > 1) {
    h++;
  }
}
console.log(w, h);
