const fs = require('fs');
const input = fs
  .readFileSync('./대기업 코테에서 나오는 유형 모음/19941input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const table = input[1].split('');
const hamburger = table.map((t) => (t === 'H' ? 0 : 'x'));
let result = 0;

for (let i = 0; i < n; i++) {
  if (table[i] === 'H') {
    continue;
  }

  const start = i - k >= 0 ? i - k : 0;
  const end = i + k + 1 < n ? i + k + 1 : n;
  for (let j = start; j < end; j++) {
    if (hamburger[j] === 0) {
      result++;
      hamburger[j] = 1;
      break;
    }
  }
}

console.log(result);
