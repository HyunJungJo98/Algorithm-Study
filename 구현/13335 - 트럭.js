const fs = require('fs');
// const input = fs
//   .readFileSync('./구현/13335input.txt')
//   .toString()
//   .trim()
//   .split('\r\n');

const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const [n, w, l] = input[0].split(' ').map(Number);
const trucks = input[1].split(' ').map(Number);

let totalNum = 0;
let totalTime = 1;
let totalW = 0;
let i = 0;
const bridge = [];

while (true) {
  if (bridge.length > 0 && totalTime - bridge[0].time === w) {
    const { w } = bridge.shift();
    totalW -= w;
  }

  if (i < n) {
    if (totalW + trucks[i] > l) {
      totalTime += 1;
      continue;
    }

    bridge.push({ w: trucks[i], time: totalTime });
    totalNum += 1;
    totalW += trucks[i];
  }

  if (bridge.length === 0) {
    break;
  }

  i += 1;
  totalTime += 1;
}

console.log(totalTime);
