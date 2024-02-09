const fs = require('fs');
const input = fs
  .readFileSync('./대기업 코테에서 나오는 유형 모음/2531input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, d, k, c] = input[0].split(' ').map(Number);
const belt = input.slice(1).map(Number);
const belt2 = [...belt, ...belt];
const sushi = {};
let max = 0;
let kind = 1;

sushi[c] = 1;

for (let i = 0; i < k; i++) {
  if (!sushi[belt2[i]]) {
    sushi[belt2[i]] = 1;
    kind++;
  } else {
    sushi[belt2[i]] += 1;
  }
}

max = kind;

for (let i = 1; i < n; i++) {
  sushi[belt2[i - 1]] -= 1;
  if (sushi[belt2[i - 1]] === 0) {
    delete sushi[belt2[i - 1]];
    kind--;
  }
  if (!sushi[belt2[i + k - 1]]) {
    sushi[belt2[i + k - 1]] = 1;
    kind++;
  } else {
    sushi[belt2[i + k - 1]] += 1;
  }

  max = Math.max(kind, max);
}

console.log(max);
