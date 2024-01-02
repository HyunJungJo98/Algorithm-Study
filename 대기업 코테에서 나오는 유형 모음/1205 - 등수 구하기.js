const fs = require('fs');
const input = fs
  .readFileSync('./대기업 코테에서 나오는 유형 모음/1205input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, score, p] = input[0].split(' ').map(Number);

if (n === 0) {
  console.log(1);
  process.exit(0);
}

const list = input[1].split(' ').map(Number);

if (list[n - 1] >= score && n === p) {
  console.log(-1);
  process.exit(0);
}

let answer = p;

for (let i = n - 1; i >= 0; i--) {
  if (list[i] < score) {
    answer = i + 1;
    continue;
  }
  if (list[i] > score) {
    answer = i + 2;
    break;
  }
  if (list[i] === score) {
    answer = i;
    while (answer >= 0 && list[answer] === score) {
      answer--;
    }
    answer += 2;
    break;
  }
}

console.log(answer);
