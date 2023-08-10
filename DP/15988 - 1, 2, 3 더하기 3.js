const fs = require('fs');
const input = fs
  .readFileSync('./DP/15988input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const t = +input[0];
const dp = [1, 2, 4, 7];

const makeDP = (num) => {
  while (dp.length <= num) {
    dp.push(
      (dp[dp.length - 1] + dp[dp.length - 2] + dp[dp.length - 3]) % 1000000009
    );
  }
};

for (let i = 1; i < input.length; i++) {
  const num = +input[i];
  if (dp.length < num) {
    makeDP(num);
  }
  console.log(dp[num - 1]);
}
