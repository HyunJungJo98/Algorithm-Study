const fs = require('fs');
const input = fs
  .readFileSync('./대기업 코테에서 나오는 유형 모음/2169input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const coord = input
  .slice(1)
  .map((line) => line.split(' ').map((num) => Number(num)));
let dp = Array(m).fill(0);

const compare = (left, right) => {
  const newDP = [];
  for (let i = 0; i < m; i++) {
    newDP.push(Math.max(left[i], right[i]));
  }
  return newDP;
};

dp[0] = coord[0][0];
for (let i = 1; i < m; i++) {
  dp[i] = dp[i - 1] + coord[0][i];
}

for (let i = 1; i < n; i++) {
  // 오른쪽, 아래쪽으로만 진행
  const right = Array(m).fill(0);
  // 왼쪽, 아래쪽으로만 진행
  const left = Array(m).fill(0);

  // 오른쪽, 아래쪽
  for (let j = 0; j < m; j++) {
    // 0열일 때에는 위쪽에서 오는 것만 가능
    if (j === 0) {
      right[j] = coord[i][j] + dp[j];
      continue;
    }
    // 위쪽과 왼쪽 중 큰 것
    right[j] = coord[i][j] + Math.max(dp[j], right[j - 1]);
  }

  // 왼쪽, 아래쪽
  for (let j = m - 1; j >= 0; j--) {
    // 맨 끝 열일 때에는 위쪽에서 오는 것만 가능
    if (j === m - 1) {
      left[j] = coord[i][j] + dp[j];
      continue;
    }
    // 위쪽과 오른쪽 중 큰 것
    left[j] = coord[i][j] + Math.max(dp[j], left[j + 1]);
  }

  dp = compare(left, right);
}

console.log(dp[m - 1]);
