const fs = require('fs');
const input = fs
  .readFileSync('./문자열/16500input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const s = input[0];
const n = +input[1];
const aArr = input.slice(2);
const dp = Array(s.length + 1).fill(0);
dp[s.length] = 1;

// s의 마지막 글자부터 탐색
for (let i = s.length - 1; i >= 0; i--) {
  // a를 돌면서
  for (let j = 0; j < n; j++) {
    // i부터 a의 길이만큼 위치에 a가 있고
    // dp[i + a의 길이]가 1이면
    if (
      s.slice(i, i + aArr[j].length) === aArr[j] &&
      dp[i + aArr[j].length] === 1
    ) {
      // dp[i]를 1로 변경
      dp[i] = 1;
      break;
    }
  }
}

console.log(dp[0]);

// 시간초과

// const dict = {};
// let index = 0;
// const string = [];
// let result = 0;

// aArr.forEach((a) => {
//   if (dict[a[0]]) {
//     dict[a[0]].push(a);
//   } else {
//     dict[a[0]] = [a];
//   }
// });

// const dfs = () => {
//   if (string.join('') === s) {
//     result = 1;
//     return;
//   }
//   if (index >= s.length || !dict[s[index]]) {
//     return;
//   }

//   for (let i = 0; i < dict[s[index]].length; i++) {
//     if (result === 1) {
//       return;
//     }
//     const a = dict[s[index]][i];
//     const sliceS = s.slice(index, index + a.length);
//     if (sliceS === a) {
//       index += a.length;
//       string.push(a);
//       dfs();
//       string.pop();
//       index -= a.length;
//     }
//   }
// };

// dfs();

// console.log(result);
