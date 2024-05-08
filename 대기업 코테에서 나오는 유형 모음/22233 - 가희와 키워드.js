const fs = require('fs');
const input = fs
  .readFileSync('./대기업 코테에서 나오는 유형 모음/22233input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const memo = {};

let l = 0;
for (let i = 1; i < n + 1; i++) {
  memo[input[i]] = 1;
  l++;
}

for (let i = n + 1; i < n + m + 1; i++) {
  const keywords = input[i].split(',');
  keywords.forEach((keyword) => {
    if (memo[keyword]) {
      memo[keyword] = 0;
      l--;
    }
  });
  console.log(l);
}
