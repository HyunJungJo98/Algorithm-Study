const fs = require('fs');
const input = fs
  .readFileSync('./대기업 코테에서 나오는 유형 모음/4485input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const D = 4;

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const getMinNode = (n, graph, visited) => {
  let min = 10 ** 9;
  let node = [-1, -1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (visited[i][j] === 0 && min > graph[i][j]) {
        min = graph[i][j];
        node = [i, j];
      }
    }
  }

  return node;
};

const dij = (n, cave) => {
  const visited = Array.from(Array(n), () => Array(n).fill(0));
  const graph = Array.from(Array(n), () => Array(n).fill(10 ** 9));
  const q = [[0, 0]];
  let index = 0;

  graph[0][0] = cave[0][0];

  while (index < q.length) {
    const [y, x] = q[index];
    visited[y][x] = 1;

    for (let i = 0; i < D; i++) {
      const [ny, nx] = [y + dy[i], x + dx[i]];

      if (ny >= 0 && ny < n && nx >= 0 && nx < n) {
        // 방문하지 않았고 기존 거리보다 짧게 갈 수 있을 때
        if (
          visited[ny][nx] === 0 &&
          graph[ny][nx] > graph[y][x] + cave[ny][nx]
        ) {
          graph[ny][nx] = graph[y][x] + cave[ny][nx];
        }
      }
    }
    // 최소 거리를 가진 노드 구하기
    const newNode = getMinNode(n, graph, visited);
    if (newNode[0] === -1) {
      break;
    }
    q.push(newNode);
    index++;
  }

  return graph[n - 1][n - 1];
};

let nIdx = 0;
let num = 1;
while (true) {
  const n = +input[nIdx];
  if (n === 0) {
    break;
  }
  const cave = input
    .slice(nIdx + 1, nIdx + n + 1)
    .map((line) => line.split(' ').map(Number));

  console.log(`Problem ${num}: ${dij(n, cave)}`);

  nIdx += n + 1;
  num++;
}
