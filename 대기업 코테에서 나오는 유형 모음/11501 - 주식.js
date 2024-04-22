const fs = require('fs');
const input = fs
  .readFileSync('./대기업 코테에서 나오는 유형 모음/11501input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const t = +input[0];

for (let i = 1; i < t * 2; i += 2) {
  const n = +input[i];
  const stocks = input[i + 1].split(' ').map(Number);

  let index = n - 1;
  let answer = 0;
  for (let i = n - 2; i >= 0; i--) {
    if (stocks[i] < stocks[index]) {
      answer += stocks[index] - stocks[i];
    } else {
      index = i;
    }
  }
  console.log(answer);
}
