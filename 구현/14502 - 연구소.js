const fs = require('fs');
const input = fs
  .readFileSync('./구현/14502input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const lab = input.slice(1).map((line) => line.split(' ').map(Number));

const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];

// 바이러스 좌표
const v = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (lab[i][j] === 2) {
      v.push([i, j]);
    }
  }
}

// 벽 세우기
let walls = 0;
const wall = () => {
  if (walls === 3) {
    bfs();
    return;
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (lab[i][j] === 0) {
        lab[i][j] = 1;
        walls++;
        wall();
        walls--;
        lab[i][j] = 0;
      }
    }
  }
};

let result = 0;

// 안전 영역 크기 세기
const safe = (lab2) => {
  let safeCnt = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (lab2[i][j] === 0) {
        safeCnt++;
      }
    }
  }
  if (result < safeCnt) {
    result = safeCnt;
  }
};

// 바이러스 퍼지기
const bfs = () => {
  const q = v.slice();
  const lab2 = lab.map((l) => [...l]);
  const visited = Array.from(Array(n), () => Array(m).fill(0));
  let index = 0;

  while (index !== q.length) {
    const [y, x] = q[index];
    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];
      if (ny >= 0 && ny < n && nx >= 0 && nx < m) {
        if (lab[ny][nx] === 0 && visited[ny][nx] === 0) {
          lab2[ny][nx] = 2;
          visited[ny][nx] = 1;
          q.push([ny, nx]);
        }
      }
    }
    index++;
  }

  safe(lab2);
};

wall();
console.log(result);
