const fs = require('fs');
const input = fs
  .readFileSync('./DFS, BFS/2589input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const map = input.slice(1).map((line) => line.split(''));
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const bfs = (startY, startX, visited) => {
  const q = [[startY, startX, 0]];
  let index = 0;
  let result = 0;

  while (q.length > index) {
    const [y, x, d] = q[index];
    visited[startY][startX] = 1;

    for (let i = 0; i < 4; i++) {
      const [ny, nx] = [y + dy[i], x + dx[i]];
      if (ny >= 0 && ny < n && nx >= 0 && nx < m) {
        if (map[ny][nx] === 'L' && !visited[ny][nx]) {
          visited[ny][nx] = 1;
          q.push([ny, nx, d + 1]);
          result = Math.max(result, d + 1);
        }
      }
    }
    index++;
  }
  return result;
};

let answer = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j] === 'L') {
      const visited = Array.from(Array(n), () => Array(m).fill(0));
      const result = bfs(i, j, visited);
      answer = Math.max(answer, result);
    }
  }
}

console.log(answer);
