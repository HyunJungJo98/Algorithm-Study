const fs = require('fs');
const input = fs
  .readFileSync('./대기업 코테에서 나오는 유형 모음/1806input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const MAX = 100001;

const [n, s] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let [left, right] = [0, 0];
let sum = arr[left];
let min = MAX;

while (left < n) {
  if (sum < s) {
    right++;
    if (right === n) {
      // right가 n까지 갔음에도 sum이 s보다 작다면
      // left를 아무리 ++해도 sum이 s보다 작을 수밖에 없으므로 break
      break;
    }
    sum += arr[right];
  } else {
    min = min > right - left + 1 ? right - left + 1 : min;
    sum -= arr[left];
    left++;
  }
}

if (min === MAX) {
  console.log(0);
} else {
  console.log(min);
}
