const fs = require('fs');
const input = fs
  .readFileSync('./누적 합/21921input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, x] = input[0].split(' ').map(Number);
const visit = input[1].split(' ').map(Number);
const sum = [];
let max = 0;
let cnt = 0;

visit.reduce((prev, curr) => {
  prev += curr;
  sum.push(prev);
  return prev;
}, 0);

for (let i = x - 1; i < n; i++) {
  let result = 0;
  if (i === x - 1) {
    result = sum[i];
  } else {
    result = sum[i] - sum[i - x];
  }

  if (max < result) {
    max = result;
    cnt = 1;
  } else if (max === result) {
    cnt++;
  }
}

if (max === 0) {
  console.log('SAD');
  process.exit(0);
}

console.log(max);
console.log(cnt);
