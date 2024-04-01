const fs = require('fs');
const input = fs
  .readFileSync('./대기업 코테에서 나오는 유형 모음/2206input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const D = 4;

const [n, m] = input[0].split(' ').map(Number);
const map = input.slice(1).map((line) => line.split('').map(Number));
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const bfs = (map) => {
  const q = [[0, 0, 1]];
  const visited = Array.from(Array(n), () =>
    Array(m)
      .fill(0)
      .map((_) => Array(2).fill(0))
  );

  let index = 0;

  visited[0][0][1] = 1;

  while (index !== q.length) {
    const [y, x, chance] = q[index];

    if (y === n - 1 && x === m - 1) {
      return visited[y][x][chance];
    }

    for (let i = 0; i < D; i++) {
      const [ny, nx] = [y + dy[i], x + dx[i]];
      if (ny >= 0 && ny < n && nx >= 0 && nx < m) {
        if (map[ny][nx] === 0 && visited[ny][nx][chance] === 0) {
          q.push([ny, nx, chance]);
          visited[ny][nx][chance] = visited[y][x][chance] + 1;
        } else if (map[ny][nx] === 1 && chance === 1) {
          q.push([ny, nx, 0]);
          visited[ny][nx][0] = visited[y][x][1] + 1;
        }
      }
    }
    index++;
  }

  return -1;
};

const answer = bfs(map);

console.log(answer);
