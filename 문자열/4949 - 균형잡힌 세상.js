const fs = require('fs');
const input = fs
  .readFileSync('./문자열/4949input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const isBalanced = (string) => {
  const stack = [];
  string.split('').forEach((s) => {
    if (s === '(' || s === '[') {
      stack.push(s);
    } else if (
      s === ')' &&
      stack.length !== 0 &&
      stack[stack.length - 1] === '('
    ) {
      stack.pop();
    } else if (
      s === ']' &&
      stack.length !== 0 &&
      stack[stack.length - 1] === '['
    ) {
      stack.pop();
    } else if (s === ')' || s === ']') {
      stack.push(s);
    }
  });
  if (stack.length !== 0) {
    return false;
  }
  return true;
};

input.forEach((string) => {
  if (string === '.') {
    return;
  }
  if (isBalanced(string)) {
    console.log('yes');
  } else {
    console.log('no');
  }
});
