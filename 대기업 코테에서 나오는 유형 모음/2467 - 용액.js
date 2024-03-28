const fs = require('fs');
const input = fs
  .readFileSync('./대기업 코테에서 나오는 유형 모음/2467input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const liquid = input[1].split(' ').map(Number);

let [left, right] = [0, n - 1];
let answer = [liquid[left], liquid[right]];
let min = 10 ** 9 * 2;

while (left < right) {
  const sum = liquid[left] + liquid[right];

  if (sum === 0) {
    answer = [liquid[left], liquid[right]];
    break;
  }

  if (Math.abs(sum) < min) {
    min = Math.abs(sum);
    answer = [liquid[left], liquid[right]];
  }

  if (sum > 0) {
    right--;
  } else {
    left++;
  }
}

console.log(answer[0], answer[1]);
