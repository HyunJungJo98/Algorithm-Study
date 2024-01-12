const fs = require('fs');
const input = fs
  .readFileSync('./대기업 코테에서 나오는 유형 모음/17266input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input.slice(0, 2).map(Number);
const x = input[2].split(' ').map(Number);

let max = x[0];

for (let i = 1; i < m; i++) {
  if (Math.ceil((x[i] - x[i - 1]) / 2) > max) {
    max = Math.ceil((x[i] - x[i - 1]) / 2);
  }
}

if (n - x[m - 1] > max) {
  max = n - x[m - 1];
}

console.log(max);
