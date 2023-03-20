const fs = require('fs');
const input = fs
  .readFileSync('./문자열/9252input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const s1 = input[0];
const s2 = input[1];

const l1 = s1.length;
const l2 = s2.length;

const graph = Array.from(Array(l1 + 1), () => Array(l2 + 1).fill(0));

for (let i = 0; i < l1; i++) {
  for (let j = 0; j < l2; j++) {
    if (s1[i] === s2[j]) {
      graph[i + 1][j + 1] = graph[i][j] + 1;
    } else {
      graph[i + 1][j + 1] = Math.max(graph[i][j + 1], graph[i + 1][j]);
    }
  }
}

let cnt = graph[l1][l2];

if (cnt === 0) {
  console.log(cnt);
  process.exit(0);
}

let i = l1;
let j = l2;
let lcs = '';

while (cnt !== 0) {
  if (i < 1 || j < 1) {
    break;
  }
  if (graph[i][j] === graph[i][j - 1]) {
    j--;
    continue;
  } else if (graph[i][j] === graph[i - 1][j]) {
    i--;
    continue;
  } else if (graph[i][j] === graph[i - 1][j - 1] + 1) {
    lcs = s1[i - 1] + lcs;
    i--;
    j--;
    cnt--;
  }
}

console.log(graph[l1][l2]);
console.log(lcs);
