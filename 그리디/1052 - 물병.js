const fs = require('fs');
const input = fs
  .readFileSync('./그리디/1052input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const remainder = [];

let [i, j] = [n, 1];

while (i > 1) {
  if (i % 2 === 1) {
    remainder.push(j);
    i -= 1;
  }
  i /= 2;
  j *= 2;
}

remainder.push(j);

if (remainder.length <= k) {
  console.log(0);
  process.exit(0);
}

const getBottle = (cur, next) => {
  let result = 0;
  let i = cur;
  while (i < next) {
    result += i;
    i *= 2;
  }
  return result;
};

let answer = 0;

while (remainder.length > k) {
  const cur = remainder.shift();
  const next = remainder[0];

  answer += getBottle(cur, next);
  remainder[0] *= 2;
}

console.log(answer);
