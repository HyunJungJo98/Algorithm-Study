const fs = require('fs');
const input = fs
  .readFileSync('./직접 코테 광탈하면서 모은 문제들/15591input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, Q] = input[0].split(' ').map(Number);
const usado = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
const usado2 = Array.from(Array(N + 1), () => Array(0));
const min = Array.from(Array(N + 1), () => Array(N + 1).fill(Infinity));

for (let i = 1; i < N; i++) {
  const [p, q, r] = input[i].split(' ').map(Number);
  usado[p][q] = r;
  usado[q][p] = r;
  usado2[q].push([p, r]);
  usado2[p].push([q, r]);
}

const bfs = (startNode) => {
  const q = [startNode];
  const visited = Array(N + 1).fill(0);
  let index = 0;
  let prev = 0;

  while (index < q.length) {
    const node = q[index];
    visited[node] = 1;
    for (let i = 0; i < usado2[node].length; i++) {
      const [linkedNode, r] = usado2[node][i];
      if (visited[linkedNode] === 0) {
        if (!prev) {
          min[node][linkedNode] = r;
        } else {
          min[startNode][linkedNode] = Math.min(
            min[startNode][node],
            usado[node][linkedNode]
          );
        }
        q.push(linkedNode);
        prev = node;
      }
    }
    index++;
  }
};

for (let i = 1; i < N + 1; i++) {
  bfs(i);
}

for (let i = N; i < N + Q; i++) {
  const [k, v] = input[i].split(' ').map(Number);
  let cnt = 0;
  for (let j = 1; j < N + 1; j++) {
    if (min[v][j] !== Infinity && min[v][j] >= k) {
      cnt++;
    }
  }
  console.log(cnt);
}
