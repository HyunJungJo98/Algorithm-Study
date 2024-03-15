const fs = require('fs');
const input = fs
  .readFileSync('./대기업 코테에서 나오는 유형 모음/13144input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const arr = input[1].split(' ').map(Number);

let [left, right] = [0, 0];
const dict = {};
let cnt = 0;

while (left < n) {
  // 이미 나온 수가 나올 때까지 right++
  while (!dict[arr[right]] && right < n) {
    dict[arr[right]] = 1;
    right++;
  }

  // arr[left]를 시작으로 하는 배열의 개수를 더함
  cnt += right - left;
  // 이미 나온 수 삭제
  delete dict[arr[left]];
  left++;
}

console.log(cnt);
