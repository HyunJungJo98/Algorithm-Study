const fs = require('fs');
const input = fs
  .readFileSync('./DP/1912input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const n = +input[0];
const arr = input[1].split(' ').map(Number);

const dp = [arr[0]];

for (let i = 1; i < n; i++) {
  dp.push(Math.max(dp[i - 1] + arr[i], arr[i]));
}

console.log(Math.max(...dp));
