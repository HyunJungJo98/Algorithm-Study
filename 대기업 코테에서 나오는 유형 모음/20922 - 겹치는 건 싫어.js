const fs = require('fs');
const input = fs
  .readFileSync('./대기업 코테에서 나오는 유형 모음/20922input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const a = input[1].split(' ').map(Number);
const arr = Array(100001).fill(0);
let [left, right] = [0, 0];
let answer = 0;

while (right < n) {
  const cur = a[right];

  if (arr[cur] < k) {
    arr[cur] += 1;
  } else if (arr[cur] === k) {
    if (right - left > answer) {
      answer = right - left;
    }

    while (a[left] !== a[right]) {
      arr[a[left]] -= 1;
      left++;
    }
    left++;
  }
  right++;
}

if (right - left > answer) {
  answer = right - left;
}

console.log(answer);
