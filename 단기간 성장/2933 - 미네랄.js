const fs = require('fs');
const input = fs
  .readFileSync('./단기간 성장/2933input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [r, c] = input[0].split(' ').map(Number);
const cave = input.slice(1, r + 1).map((line) => line.split(''));
const n = +input[r + 1];
const heights = input[r + 2].split(' ').map(Number);
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
let flag = 1;

const bfs = (visited, startX) => {
  const q = [];
  q.push([r - 1, startX]);
  visited[r - 1][startX] = 1;
  let index = 0;

  while (index < q.length) {
    const [y, x] = q[index];
    for (let j = 0; j < 4; j++) {
      const [ny, nx] = [y + dy[j], x + dx[j]];
      if (ny < r && ny >= 0 && nx < c && nx >= 0) {
        if (cave[ny][nx] === 'x' && !visited[ny][nx]) {
          q.push([ny, nx]);
          visited[ny][nx] = 1;
        }
      }
    }
    index++;
  }
};

const findCluster = () => {
  const visited = Array.from(Array(r), () => Array(c).fill(0));
  const cluster = [];
  let flag = 0;

  // 바닥에 붙어있는 클러스터 체크
  for (let i = 0; i < c; i++) {
    if (cave[r - 1][i] === 'x' && !visited[r - 1][i]) {
      bfs(visited, i);
    }
  }

  // 공중에 떠있는 클러스터 따로 표시
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (cave[i][j] === 'x' && !visited[i][j]) {
        flag = 1;
        cluster.push([i, j]);
      }
    }
  }

  return [flag, cluster, visited];
};

const dropCluster = (cluster, visited) => {
  // 내려가야 할 높이 구하기
  let min = Infinity;
  for (let i = 0; i < cluster.length; i++) {
    const [y, x] = cluster[i];
    // * 모든 * 미네랄들마다
    let cnt = 0;
    for (let j = y + 1; j < r; j++) {
      // 아래에 공기가 있으면 cnt++
      if (cave[j][x] === '.') {
        cnt++;
      }
      // 아래에 바닥에 붙어있는 클러스터가 있으면 끝
      if (cave[j][x] === 'x' && visited[j][x]) break;
    }
    // 내려가야 할 높이 중 최솟값 구하기
    min = Math.min(min, cnt);
  }

  // 내리기
  for (let i = cluster.length - 1; i >= 0; i--) {
    const [y, x] = cluster[i];
    cave[y][x] = '.';
    cave[y + min][x] = 'x';
  }
};

for (let i = 0; i < n; i++) {
  const height = r - heights[i];
  if (flag) {
    for (let j = 0; j < c; j++) {
      if (cave[height][j] === 'x') {
        cave[height][j] = '.';
        break;
      }
    }
  } else {
    for (let j = c - 1; j >= 0; j--) {
      if (cave[height][j] === 'x') {
        cave[height][j] = '.';
        break;
      }
    }
  }
  const [haveCluster, cluster, visited] = findCluster();
  if (haveCluster) {
    dropCluster(cluster, visited);
  }
  flag = 1 - flag;
}

cave.forEach((line) => console.log(line.join('')));
