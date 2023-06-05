const fs = require('fs');
const input = fs
  .readFileSync('./삼성 SW 역량 테스트 기출 문제/13458input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const a = input[1].split(' ').map(Number);
const [b, c] = input[2].split(' ').map(Number);

let result = 0;

a.map((i) => {
  result += 1;
  if (i - b <= 0) {
    return;
  }
  result += parseInt((i - b) / c);
  if (parseInt(i - b) % c !== 0) {
    result += 1;
  }
});

console.log(result);
