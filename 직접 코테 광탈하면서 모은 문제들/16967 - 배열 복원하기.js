const fs = require('fs');
const input = fs
  .readFileSync('./직접 코테 광탈하면서 모은 문제들/16967input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [h, w, x, y] = input[0].split(' ').map(Number);
const B = input.slice(1).map((line) => line.split(' ').map(Number));
const A = Array.from(Array(h), () => Array(w).fill(0));

for (let i = 0; i < h; i++) {
  for (let j = 0; j < w; j++) {
    A[i][j] = B[i][j];
  }
}

for (let i = x; i < h; i++) {
  for (let j = y; j < w; j++) {
    A[i][j] = B[i][j] - A[i - x][j - y];
  }
}

A.map((line) => console.log(line.join(' ')));
