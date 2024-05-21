const fs = require('fs');
const input = fs
  .readFileSync('./대기업 코테에서 나오는 유형 모음/14940input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const D = 4;

const [n, m] = input[0].split(' ').map(Number);
const graph = input.slice(1).map((line) => line.split(' ').map(Number));
const target = [0, 0];
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
const answer = Array.from(Array(n), () => Array(m).fill(0));

let flag = 0;
for (let i = 0; i < n; i++) {
  if (flag) {
    break;
  }
  for (let j = 0; j < m; j++) {
    if (graph[i][j] === 2) {
      target[0] = i;
      target[1] = j;
      flag = 1;
      break;
    }
  }
}

answer[target[0]][target[1]] = 0;

const bfs = ([i, j]) => {
  const q = [[i, j, 0]];
  const visited = Array.from(Array(n), () => Array(m).fill(0));
  let index = 0;
  visited[i][j] = 1;

  while (index < q.length) {
    const [y, x, dep] = q[index];
    for (let i = 0; i < D; i++) {
      const [ny, nx] = [y + dy[i], x + dx[i]];
      if (ny < n && ny >= 0 && nx < m && nx >= 0) {
        if (visited[ny][nx] === 0 && graph[ny][nx] === 1) {
          answer[ny][nx] = dep + 1;
          q.push([ny, nx, dep + 1]);
          visited[ny][nx] = 1;
        }
      }
    }
    index++;
  }
};

bfs(target);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (graph[i][j] === 1 && answer[i][j] === 0) {
      answer[i][j] = -1;
    }
  }
}

answer.forEach((line) => console.log(line.join(' ')));
