const fs = require('fs');
const input = fs
  .readFileSync('./대기업 코테에서 나오는 유형 모음/1253input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const a = input[1].split(' ').map(Number);

let result = 0;

// for (let i = 0; i < n; i++) {
//   const ai = a[i];
//   let flag = 0;
//   for (let j = 0; j < n - 1; j++) {
//     if (j === i) {
//       continue;
//     }
//     for (let k = j + 1; k < n; k++) {
//       if (k === i) {
//         continue;
//       }
//       if (a[j] + a[k] === ai) {
//         result += 1;
//         flag = 1;
//         break;
//       }
//     }
//     if (flag) {
//       break;
//     }
//   }
// }

// 이분 탐색
a.sort((a, b) => a - b);

for (let i = 0; i < n; i++) {
  let [left, right] = [0, n - 1];
  while (left < right) {
    if (left === i) {
      left++;
      continue;
    }
    if (right === i) {
      right--;
      continue;
    }
    if (a[left] + a[right] === a[i]) {
      result++;
      break;
    }
    if (a[left] + a[right] > a[i]) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(result);
