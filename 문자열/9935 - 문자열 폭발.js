const fs = require('fs');
const { exit } = require('process');
const input = fs
  .readFileSync('./문자열/9935input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const s = input[0];
const target = input[1];
const l = target.length;

const isCorrect = (stack) => {
  return target
    .split('')
    .every((char, index) => char === stack[stack.length - l + index]);
};

const bomb = () => {
  for (let i = 0; i < l; i++) {
    stack.pop();
  }
};

const stack = [];
let index = 0;
while (index !== s.length) {
  stack.push(s[index]);
  if (stack.length >= l && isCorrect(stack)) {
    bomb();
  }
  index++;
}

if (stack.length !== 0) {
  console.log(stack.join(''));
  process.exit();
}

console.log('FRULA');
