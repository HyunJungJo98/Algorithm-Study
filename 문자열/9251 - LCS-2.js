const fs = require('fs');
const input = fs
  .readFileSync('./문자열/9251input2.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const [s1, s2] = input;
const arr = Array.from(Array(s2.length + 1), () =>
  Array(s1.length + 1).fill(0)
);

for (let i = 1; i < s2.length + 1; i++) {
  for (let j = 1; j < s1.length + 1; j++) {
    if (s2[i - 1] === s1[j - 1]) {
      arr[i][j] = arr[i - 1][j - 1] + 1;
    } else {
      arr[i][j] = Math.max(arr[i - 1][j], arr[i][j - 1]);
    }
  }
}

console.log(arr[s2.length][s1.length]);
