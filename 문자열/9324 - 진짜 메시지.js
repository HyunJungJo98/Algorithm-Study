const fs = require('fs');
const input = fs
  .readFileSync('./문자열/9324input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const t = +input[0];

for (let i = 0; i < t; i++) {
  const m = input[i + 1];
  const dict = {};
  let result = 'OK';
  for (let j = 0; j < m.length; j++) {
    const c = m[j];
    if (dict[c]) {
      dict[c] += 1;
      if (dict[c] === 3) {
        if (j === m.length - 1) {
          result = 'FAKE';
          break;
        } else if (m[j + 1] !== c) {
          result = 'FAKE';
          break;
        } else {
          dict[c] = 0;
        }
      }
    } else {
      dict[c] = 1;
    }
  }
  console.log(result);
}
