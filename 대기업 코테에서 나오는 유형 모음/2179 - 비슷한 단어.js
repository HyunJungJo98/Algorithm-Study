const fs = require('fs');
const input = fs
  .readFileSync('./대기업 코테에서 나오는 유형 모음/2179input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const dict = {};
let index = [0, 0];
let max = 0;

for (let i = 1; i < n + 1; i++) {
  const string = input[i];

  for (let j = 1; j < string.length + 1; j++) {
    const slice = string.slice(0, j);
    if (!dict[slice]) {
      dict[slice] = i;
    } else {
      if (max < j && input[index[0]] !== input[i]) {
        max = j;
        index = [dict[slice], i];
      }
      if (max === j && dict[slice] < index[0]) {
        index = [dict[slice], i];
      }
    }
  }
}

console.log(input[index[0]]);
console.log(input[index[1]]);
