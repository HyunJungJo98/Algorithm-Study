const fs = require('fs');
// const input = fs
//   .readFileSync('./DFS, BFS/1926input.txt')
//   .toString()
//   .trim()
//   .split('\r\n');

const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const graph = input.slice(1).map((line) => line.split(' ').map(Number));
const visited = Array.from(Array(n), () => Array(m).fill(0));

const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];

const bfs = (y, x) => {
  const q = [[y, x]];
  visited[y][x] = 1;
  let cnt = 1;
  while (q.length !== 0) {
    [y, x] = q.shift();
    for (let i = 0; i < 4; i++) {
      const ny = dy[i] + y;
      const nx = dx[i] + x;
      if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
        if (visited[ny][nx] === 0 && graph[ny][nx] === 1) {
          q.push([ny, nx]);
          visited[ny][nx] = 1;
          cnt += 1;
        }
      }
    }
  }

  return cnt;
};

let cnt = 0;
let max = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (graph[i][j] === 1 && visited[i][j] === 0) {
      const result = bfs(i, j);
      if (result > max) max = result;
      cnt += 1;
    }
  }
}

console.log(`${cnt}\n${max}`);
