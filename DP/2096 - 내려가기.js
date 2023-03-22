const fs = require('fs');
const input = fs
  .readFileSync('./DP/2096input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const W = 3;
const board = input.slice(1).map((line) => line.split(' ').map(Number));

let dp1 = [];
for (let i = 0; i < W; i++) {
  dp1.push([board[0][i], board[0][i]]);
}
let dp2 = Array.from(Array(W), () => Array(2).fill(0));

const d = [-1, 0, 1];

const init = () => {
  dp1 = JSON.parse(JSON.stringify(dp2));
  dp2.map((line) => {
    line[0] = 0;
    line[1] = 0;
  });
};

for (let i = 1; i < n; i++) {
  for (let j = 0; j < W; j++) {
    let min = 10;
    let max = -1;
    d.map((dir) => {
      const newDir = j + dir;
      if (newDir >= 0 && newDir < W) {
        if (dp1[newDir][0] > max) {
          max = dp1[newDir][0];
        }
        if (dp1[newDir][1] < min) {
          min = dp1[newDir][1];
        }
      }
    });
    dp2[j][0] = max + board[i][j];
    dp2[j][1] = min + board[i][j];
  }
  init();
}

const max = Math.max(dp1[0][0], dp1[1][0], dp1[2][0]);
const min = Math.min(dp1[0][1], dp1[1][1], dp1[2][1]);
console.log(max, min);
