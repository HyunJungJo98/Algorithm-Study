const fs = require('fs');
const input = fs
  .readFileSync('./삼성 SW 역량 테스트 기출 문제/17142input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const VIRUS = 2;
const MAX = 100000;
const [n, m] = input[0].split(' ').map(Number);
const lab = input.slice(1).map((line) => line.split(' ').map(Number));
const visited = Array.from(Array(n), () => new Array(n).fill(0));
const virus = [];
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
let result = MAX;

// 모든 칸에 바이러스가 있는지 확인
const isAllSpread = (lab) => {
  return lab.flat().every((s) => s !== 0);
};

// 바이러스 퍼뜨리기
const spreadVirus = () => {
  const q = [...virus];
  const visited2 = Array.from(Array(n), () => new Array(n).fill(0));
  const lab2 = lab.map((l) => [...l]);
  let index = 0;
  let time = 0;

  q.forEach((v) => {
    visited2[v[0]][v[1]] = 1;
    lab2[v[0]][v[1]] = '*';
  });

  while (index < q.length) {
    const [y, x, dep] = q[index];
    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];
      if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
        if (
          (lab2[ny][nx] === 0 || lab2[ny][nx] === 2) &&
          visited2[ny][nx] === 0
        ) {
          q.push([ny, nx, dep + 1]);
          lab2[ny][nx] = '*';
          visited2[ny][nx] = 1;
          time = dep + 1;
        }
      }
    }
    index++;
  }

  if (isAllSpread(lab2) && result > time) {
    result = time;
  }
};

// 바이러스 m개 지정
const backTracking = () => {
  if (virus.length === m) {
    spreadVirus();

    return;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (lab[i][j] === VIRUS && visited[i][j] === 0) {
        // 1 === 깊이
        virus.push([i, j, 1]);
        visited[i][j] = 1;
        backTracking();
        virus.pop();
        visited[i][j] = 0;
      }
    }
  }
};

backTracking();

if (result === MAX) {
  console.log(-1);
} else {
  console.log(result - 1);
}
