const fs = require('fs');
const input = fs
  .readFileSync('./단기간 성장/6087input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [w, h] = input[0].split(' ').map(Number);
const map = input.slice(1).map((line) => line.split(''));
const laser = Array.from(Array(h), () => Array(w).fill(Infinity));
const c = [];

const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

map.forEach((line, i) =>
  line.forEach((s, j) => {
    if (s === 'C') {
      c.push([i, j]);
    }
  })
);

// 최단 거리 중 거울을 가장 적게 쓸 때를 구함
const bfs = (q) => {
  let index = 0;
  while (q.length > index) {
    const [y, x, d, cnt] = q[index];
    index++;
    if (laser[y][x] < cnt) continue;

    for (let i = 0; i < 4; i++) {
      const [ny, nx] = [y + dy[i], x + dx[i]];
      let nCnt = cnt;

      if (ny < 0 || ny >= h || nx < 0 || nx >= w) continue;
      if (map[ny][nx] === '*') continue;

      if (d !== i) {
        nCnt += 1;
      }

      // 최단 거리가 여러 개일 수 있으므로
      // 이미 쓴 거울의 수(laser[ny][nx])보다
      // 현재 쓸 거울의 수(nCnt)가 작을 경우 [ny][nx]를 재방문
      if (laser[ny][nx] >= nCnt) {
        laser[ny][nx] = nCnt;
        q.push([ny, nx, i, nCnt]);
      }
    }
  }
};

const q = [];
laser[c[0][0]][c[0][1]] = 0;

for (let i = 0; i < 4; i++) {
  const [ny, nx] = [c[0][0] + dy[i], c[0][1] + dx[i]];
  if (ny >= 0 && ny < h && nx >= 0 && nx < w && map[ny][nx] !== '*') {
    q.push([ny, nx, i, 0]);
    laser[ny][nx] = 0;
  }
}

bfs(q);

console.log(laser[c[1][0]][c[1][1]]);
