const fs = require('fs');
const input = fs
  .readFileSync('./문자열/13417input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const t = Number(input[0]);

// let answer = '';

// const makeString = (l, start, others, string, left, right, count) => {
//   if (count === l) {
//     const result = string.join('');
//     if (result < answer) {
//       answer = result;
//     }
//     return;
//   }

//   for (let i = start; i < others.length; i++) {
//     string[right] = others[i];
//     right += 1;
//     count += 1;
//     makeString(l, i + 1, others, string, left, right, count);
//     count -= 1;
//     right -= 1;
//     string[right] = '';

//     string[left] = others[i];
//     left -= 1;
//     count += 1;
//     makeString(l, i + 1, others, string, left, right, count);
//     count -= 1;
//     left += 1;
//     string[left] = '';
//   }
// };

// for (let i = 0; i < t; i++) {
//   const n = +input[i * 2 + 1];
//   const s = input[i * 2 + 2].split(' ');
//   answer = s.join('');
//   const string = Array(n * 2 - 1).fill('');
//   string[n - 1] = s[0];
//   const left = n - 2;
//   const right = n;
//   const count = 1;
//   makeString(n, 0, s.slice(1), string, left, right, count);
//   console.log(answer);
// }

const makeString = (left, right, n, s, string) => {
  for (let i = 1; i < n; i++) {
    if (s[i] <= string[left]) {
      left -= 1;
      string[left] = s[i];
      continue;
    }
    string[right] = s[i];
    right += 1;
  }
  console.log(string.join(''));
};

for (let i = 0; i < t; i++) {
  const n = +input[i * 2 + 1];
  const s = input[i * 2 + 2].split(' ');
  const string = Array(n * 2 - 1).fill('');
  string[n - 1] = s[0];
  const left = n - 1;
  const right = n;
  makeString(left, right, n, s, string);
}
