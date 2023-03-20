const fs = require('fs');
const input = fs
  .readFileSync('./문자열/1958input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const s1 = input[0];
const s2 = input[1];
const s3 = input[2];

const l1 = s1.length;
const l2 = s2.length;
const l3 = s3.length;

const graph = Array.from(Array(l1 + 1), () =>
  Array.from(Array(l2 + 1), () => Array(l3 + 1).fill(0))
);

for (let i = 0; i < l1; i++) {
  for (let j = 0; j < l2; j++) {
    for (let k = 0; k < l3; k++) {
      if (s1[i] === s2[j] && s2[j] === s3[k]) {
        graph[i + 1][j + 1][k + 1] = graph[i][j][k] + 1;
      } else {
        graph[i + 1][j + 1][k + 1] = Math.max(
          graph[i][j + 1][k + 1],
          graph[i][j + 1][k],
          graph[i][j][k + 1],
          graph[i + 1][j + 1][k],
          graph[i + 1][j][k + 1],
          graph[i + 1][j][k]
        );
      }
    }
  }
}

console.log(graph[l1][l2][l3]);
