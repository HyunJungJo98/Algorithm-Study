const fs = require('fs');
const input = fs
  .readFileSync('./대기업 코테에서 나오는 유형 모음/25757input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, game] = input[0].split(' ').map((v, i) => (i === 0 ? +v : v));

const peopleNum = { Y: 1, F: 2, O: 3 };
const num = peopleNum[game];

const stack = [];
const set = new Set();
const names = input.slice(1, n + 1);

let answer = 0;

names.forEach((name) => {
  if (set.has(name)) {
    return;
  }

  stack.push(name);

  set.add(name);
  if (stack.length === num) {
    answer++;
    stack.length = 0;
  }
});

console.log(answer);
