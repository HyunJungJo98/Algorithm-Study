const fs = require('fs');
const input = fs
  .readFileSync('./단기간 성장/11066input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const t = +input[0];

for (let i = 0; i < t; i++) {
  const k = +input[i * 2 + 1];
  const files = input[i * 2 + 2].split(' ').map(Number);
  const subSum = Array(k + 1).fill(0);
  const dp = Array.from(Array(k + 1), () => Array(k + 1).fill(0));

  // 부분합 구하기
  files.reduce((prev, curr, index) => {
    prev += curr;
    subSum[index + 1] = prev;
    return prev;
  }, 0);

  for (let a = 1; a < k; a++) {
    for (let b = 1; a + b <= k; b++) {
      dp[b][a + b] = Infinity;

      for (let c = b; c < a + b; c++) {
        // 점화식
        dp[b][a + b] = Math.min(
          dp[b][a + b],
          dp[b][c] + dp[c + 1][a + b] + subSum[a + b] - subSum[b - 1]
        );
      }
    }
  }
  console.log(dp[1][k]);
}
