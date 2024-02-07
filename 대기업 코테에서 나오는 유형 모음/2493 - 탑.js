const fs = require('fs');
const input = fs
  .readFileSync('./대기업 코테에서 나오는 유형 모음/2493input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const tower = input[1].split(' ').map(Number);
const result = [0];

const stack = [{ index: 1, item: tower[0] }];

for (let i = 1; i < n; i++) {
  if (tower[i] > stack[stack.length - 1].item) {
    while (stack.length) {
      if (stack[stack.length - 1].item > tower[i]) {
        break;
      }
      stack.pop();
    }
    result.push(stack.length === 0 ? 0 : stack[stack.length - 1].index);
    stack.push({ index: i + 1, item: tower[i] });
  } else {
    result.push(stack.length === 0 ? 0 : stack[stack.length - 1].index);
    stack.push({ index: i + 1, item: tower[i] });
  }
}

console.log(result.join(' '));
