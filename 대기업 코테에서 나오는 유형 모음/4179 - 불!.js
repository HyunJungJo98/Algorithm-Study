const fs = require('fs');
const input = fs
  .readFileSync('./대기업 코테에서 나오는 유형 모음/4179input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const D = 4;

const [r, c] = input[0].split(' ').map(Number);
const maze = input.slice(1).map((line) => line.split(''));
const exit = Array.from(Array(r), () => Array(c).fill(0));
let j = [];
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

for (let y = 0; y < r; y++) {
  for (let x = 0; x < c; x++) {
    if (maze[y][x] === 'J') {
      j = [y, x];
      continue;
    }
    if (
      (x === 0 || x === c - 1 || y === 0 || y === r - 1) &&
      maze[y][x] === '.'
    ) {
      exit[y][x] = 1;
    }
  }
}

// 출구가 없을 때
if (maze.every((line) => line.every((m) => m === 0))) {
  console.log('IMPOSSIBLE');
  process.exit(0);
}

const isNoSpace = (maze) => {
  return maze.every((line) => line.every((m) => m !== '.'));
};

const fire = (maze, jy, jx) => {
  const nMaze = maze.map((m) => [...m]);
  const f = [];
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (maze[i][j] === 'F') {
        f.push([i, j]);
      }
    }
  }

  for (let i = 0; i < f.length; i++) {
    const [y, x] = f[i];
    for (let j = 0; j < D; j++) {
      const [ny, nx] = [y + dy[j], x + dx[j]];
      if (ny === jy && nx === jx) {
        return false;
      }
      if (nx >= 0 && nx < c && y >= 0 && y < r) {
        if (nMaze[ny][nx] !== '#') {
          nMaze[ny][nx] = 'F';
        }
      }
    }
  }

  return nMaze;
};

const q = [[j, maze, 0]];
let index = 0;
let result = 0;

while (index < q.length) {
  const [[y, x], m, dep] = q[index];
  m[y][x] = dep;
  if (isNoSpace(m) || exit[y][x] === 1) {
    result = dep + 1;
    break;
  }
  for (let i = 0; i < D; i++) {
    const [ny, nx] = [y + dy[i], x + dx[i]];
    if (nx >= 0 && nx < c && y >= 0 && y < r) {
      if (m[ny][nx] === '.') {
        const nMaze = fire(m, ny, nx);
        q.push([[ny, nx], nMaze, dep + 1]);
      }
    }
  }
  index++;
}

if (result) {
  console.log(result);
} else {
  console.log('IMPOSSIBLE');
}
