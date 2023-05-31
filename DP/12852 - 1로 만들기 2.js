const fs = require('fs');
const input = fs
  .readFileSync('./DP/12852input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];

const dp = new Array(n + 1).fill(0);
const history = new Array(n + 1).fill(0);
const result = [n];
history[2] = 1;
history[3] = 1;
dp[2] = 1;
dp[3] = 1;

for (let i = 2; i < n + 1; i++) {
  dp[i] = dp[i - 1] + 1;
  history[i] = i - 1;

  // dp[i/3] < dp[i-1], dp[i/2] < dp[i-1] 하면 안 됨
  // i % 3 === 0 && i % 2 === 0일 때 dp[i]가 바뀌므로
  if (i % 3 === 0 && dp[i / 3] + 1 < dp[i]) {
    dp[i] = dp[i / 3] + 1;
    history[i] = i / 3;
  }
  // 여기서 dp[i/2]와 dp[i-1]을 비교하는 것이 아니라
  // dp[i/2]와 dp[i/3]을 비교해야 하기 때문
  if (i % 2 === 0 && dp[i / 2] + 1 < dp[i]) {
    dp[i] = dp[i / 2] + 1;
    history[i] = i / 2;
  }
}

let n2 = n;
while (n2 > 1) {
  result.push(history[n2]);
  n2 = history[n2];
}

console.log(dp[n]);
console.log(result.join(' '));
