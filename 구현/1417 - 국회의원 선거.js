const fs = require('fs');
const input = fs
  .readFileSync('./구현/1417input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const n = +input[0];
if (n === 1) {
  console.log(0);
  exit(0);
}
