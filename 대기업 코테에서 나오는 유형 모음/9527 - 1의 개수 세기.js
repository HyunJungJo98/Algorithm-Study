const fs = require('fs');
const input = fs
  .readFileSync('./대기업 코테에서 나오는 유형 모음/9527input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const MAX_LEN = 56;

const [a, b] = input[0].split(' ').map(Number);
const dp = Array(MAX_LEN).fill(0);
dp[0] = 1;

for (let i = 1; i < MAX_LEN; i++) {
  dp[i] = 2 * dp[i - 1] + 2 ** i;
}

const sum = (x) => {
  // 0번째 비트 자리가 1인지 0인지
  let answer = x & 1;

  // 높은 자리 비트부터
  for (let i = MAX_LEN; i > 0; i--) {
    // x(2진수)가 해당 자리에 1이 있다면
    if (x & (2 ** i)) {
      // 맨 앞부터 1이 있는만큼 더해줌
      answer += dp[i - 1] + (x - 2 ** i + 1);
      // 그 다음 자리를 확인하기 위해 빼줌
      x -= 2 ** i;
    }
  }

  return answer;
};

console.log(sum(b) - sum(a - 1));
