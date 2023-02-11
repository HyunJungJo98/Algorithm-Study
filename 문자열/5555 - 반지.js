const fs = require('fs');
const input = fs
  .readFileSync('./문자열/5555input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const target = input[0];
const n = +input[1];

let answer = 0;
for (let i = 2; i < n + 2; i++) {
  const ring = input[i].split('');

  for (let j = 0; j < 10; j++) {
    if (ring.join('').includes(target)) {
      answer += 1;
      break;
    }
    ring.push(ring[j]);
    ring[j] = '';
  }
}

console.log(answer);
