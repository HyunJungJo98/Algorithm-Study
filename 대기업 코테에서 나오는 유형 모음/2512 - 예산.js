const fs = require('fs');
const input = fs
  .readFileSync('./대기업 코테에서 나오는 유형 모음/2512input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const budgets = input[1].split(' ').map(Number);
const m = +input[2];

budgets.sort((a, b) => a - b);

let [left, right] = [1, budgets[n - 1]];

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  const sum = budgets.reduce(
    (prev, curr) => prev + (curr <= mid ? curr : mid),
    0
  );
  if (sum <= m) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(right);
