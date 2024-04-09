const fs = require('fs');
const input = fs
  .readFileSync('./대기업 코테에서 나오는 유형 모음/12919input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [s, t] = input.map((string) => string.split(''));
const stringS = input[0];

const dfs = () => {
  if (s.length === t.length) {
    if (stringS === t.join('')) {
      console.log(1);
      process.exit(0);
    }
  }
  if (t[0] === 'B') {
    t.reverse();
    t.pop();
    dfs();
    t.push('B');
    t.reverse();
  }
  if (t[t.length - 1] === 'A') {
    t.pop();
    dfs();
    t.push('A');
  }
};

dfs();

console.log(0);

// const l = t.length - s.length;
// let reverse = 0;
// let [left, right] = [0, t.length - 1];

// for (let i = 0; i < l - 1; i++) {
//   const last = reverse % 2 === 0 ? t[right] : t[left];

//   if (last === 'A') {
//     if (reverse % 2 === 0) {
//       right--;
//     } else {
//       left++;
//     }
//   } else {
//     if (reverse % 2 === 0) {
//       left++;
//       reverse++;
//     } else {
//       right--;
//       reverse++;
//     }
//   }
// }

// console.log(left, right, reverse);

// const first = reverse % 2 === 0 ? t[left] : t[right];
// if (first === 'B') {
//   const result = t.slice(left + 1, right + 1);
//   console.log(result);
//   let answer = '';
//   for (let i = result.length - 1; i >= 0; i--) {
//     answer += result[i];
//   }
//   console.log(answer);
// } else {
//   const result = t;
// }
// console.log(t.slice(left, right), reverse);
