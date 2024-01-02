const fs = require('fs');
const input = fs
  .readFileSync('./DP/1965input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const box = input[1].split(' ').map(Number);
const dp = Array(n).fill(0);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (box[i] > box[j] && dp[i] < dp[j]) {
      dp[i] = dp[j];
    }
  }
  dp[i] += 1;
}

console.log(Math.max(...dp));
