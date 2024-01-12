const fs = require('fs');
const input = fs
  .readFileSync('./대기업 코테에서 나오는 유형 모음/13305input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const roadLen = input[1].split(' ').map(BigInt);
const price = input[2].split(' ').map(BigInt);

const dp = Array(n).fill(0);
let min = price[0];

dp[1] = min * roadLen[0];

for (let i = 1; i < n - 1; i++) {
  if (min > price[i]) {
    min = price[i];
  }
  dp[i + 1] = dp[i] + min * roadLen[i];
}

console.log(String(dp[n - 1]));
