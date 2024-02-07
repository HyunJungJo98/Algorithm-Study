const fs = require('fs');
const input = fs
  .readFileSync('./DP/9251input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const [s1, s2] = input;
const [l1, l2] = [s1.length, s2.length];
const dp = Array.from(Array(l1 + 1), () => Array(l2 + 1).fill(0));

for (let i = 0; i < l1; i++) {
  for (let j = 0; j < l2; j++) {
    if (s1[i] === s2[j]) {
      dp[i + 1][j + 1] = dp[i][j] + 1;
      continue;
    }
    dp[i + 1][j + 1] = Math.max(dp[i][j + 1], dp[i + 1][j]);
  }
}

console.log(dp[l1][l2]);
