const fs = require('fs');
const input = fs
  .readFileSync('./대기업 코테에서 나오는 유형 모음/2631input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const arr = input.slice(1).map(Number);
const lis = Array(n).fill(1);
let max = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j]) {
      lis[i] = Math.max(lis[i], lis[j] + 1);
    }
  }
  max = Math.max(max, lis[i]);
}

console.log(n - max);
