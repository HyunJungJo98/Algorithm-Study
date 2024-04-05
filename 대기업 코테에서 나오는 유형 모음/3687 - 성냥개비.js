const fs = require('fs');
const input = fs
  .readFileSync('./대기업 코테에서 나오는 유형 모음/3687input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const t = +input[0];
// dp[i] : i개의 성냥개비로 만들 수 있는 가장 작은 수
// dp[6] : 맨 앞자리에 0이 올 수 없으므로 6으로 초기화
const dp = [0, 0, 1, 7, 4, 2, 6, 8, 10];

// 너무 큰 수 -> 문자열로 반환
const getMax = (num) => {
  let cnt = 0;
  if (num % 2 === 0) {
    cnt = num / 2;
    return '1'.repeat(cnt);
  }
  cnt = (num - 3) / 2;
  return '7' + '1'.repeat(cnt);
};

const makeDP = () => {
  let index = 9;

  while (index < 101) {
    let min = 10 ** 15;
    for (let i = 2; i < 8; i++) {
      if (i === 6) {
        min = Math.min(min, dp[index - i] * 10);
      } else {
        min = Math.min(min, dp[index - i] * 10 + dp[i]);
      }
    }
    dp.push(min);
    index++;
  }
};

makeDP();

for (let i = 1; i < t + 1; i++) {
  const num = +input[i];

  const max = getMax(num);
  const min = dp[num];
  console.log(min, max);
}
