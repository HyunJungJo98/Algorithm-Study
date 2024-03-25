const fs = require('fs');
const input = fs
  .readFileSync('./누적 합/2143input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const t = +input[0];
const [n, m] = [+input[1], +input[3]];
const A = input[2].split(' ').map(Number);
const B = input[4].split(' ').map(Number);

let answer = 0;

const sumA = [0];
const sumB = [0];
let sum = 0;
for (let i = 0; i < n; i++) {
  sum += A[i];
  sumA.push(sum);
}

sum = 0;
for (let i = 0; i < m; i++) {
  sum += B[i];
  sumB.push(sum);
}

const newSumA = [];
let start = 0;
for (let i = 1; i < n + 1; i++) {
  for (let j = i; j < n + 1; j++) {
    newSumA.push(sumA[j] - sumA[start]);
  }
  start++;
}

const newSumB = {};
start = 0;
for (let i = 1; i < m + 1; i++) {
  for (let j = i; j < m + 1; j++) {
    const b = sumB[j] - sumB[start];
    if (newSumB[b]) {
      newSumB[b] += 1;
    } else {
      newSumB[b] = 1;
    }
  }
  start++;
}

for (let i = 0; i < newSumA.length; i++) {
  const target = t - newSumA[i];
  if (newSumB[target]) {
    answer += newSumB[target];
  }
}

console.log(answer);
