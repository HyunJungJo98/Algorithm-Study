const fs = require('fs');
const input = fs
  .readFileSync('./DFS, BFS/1743input.txt')
  .toString()
  .split('\r\n');

//   const input = fs
//   .readFileSync('dev/stdin')
//   .toString()
//   .split('\n');

const [n, m, k] = input[0].split(' ').map(Number);
const hall = Array.from(Array(n + 1), () => Array(m + 1).fill(0));
Array(k)
  .fill(0)
  .map((_, i) => {
    const coor = input[i + 1].split(' ').map(Number);
    hall[coor[0]][coor[1]] = 1;
  });

const visited = Array.from(Array(n + 1), () => Array(m + 1).fill(0));

const dx = [1, -1, 0, 0];
const dy = [0, 0, -1, 1];

let result = 0;
const q = [];

const bfs = (hall, visited, starty, startx) => {
  q.push([starty, startx]);
  visited[starty][startx] = 1;
  let cnt = 1;
  while (q.length !== 0) {
    const [y, x] = q.shift();

    dx.map((_, index) => {
      const newX = dx[index] + x;
      const newY = dy[index] + y;
      if (newX < m + 1 && newX > 0 && newY < n + 1 && newY > 0) {
        if (hall[newY][newX] === 1 && visited[newY][newX] === 0) {
          q.push([newY, newX]);
          visited[newY][newX] = 1;
          cnt += 1;
        }
      }
    });
  }
  return cnt;
};

for (let i = 1; i < n + 1; i++) {
  for (let j = 1; j < m + 1; j++) {
    if (hall[i][j] === 1 && visited[i][j] === 0) {
      const cnt = bfs(hall, visited, i, j);
      if (cnt > result) {
        result = cnt;
      }
    }
  }
}

console.log(result);
