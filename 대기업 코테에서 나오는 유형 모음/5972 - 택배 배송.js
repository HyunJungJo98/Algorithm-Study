const fs = require('fs');
const input = fs
  .readFileSync('./대기업 코테에서 나오는 유형 모음/5972input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const graph = Array.from(Array(n + 1), () => Array(0));
const visited = Array(n).fill(0);
const d = Array(n + 1).fill(Infinity);

for (let i = 1; i < m + 1; i++) {
  const [a, b, c] = input[i].split(' ').map(Number);
  graph[a].push([b, c]);
  graph[b].push([a, c]);
}

const isAllVisited = (visited) => {
  return !visited.some((v) => v === 0);
};

const findNextNode = (d, visited) => {
  let min = Infinity;
  let index = 0;
  for (let i = 1; i < n + 1; i++) {
    if (d[i] < min && visited[i - 1] === 0) {
      min = d[i];
      index = i;
    }
  }

  return index;
};

const dij = () => {
  const q = [1];
  let index = 0;
  d[1] = 0;

  while (!isAllVisited(visited)) {
    const node = q[index];
    visited[node - 1] = 1;
    for (let i = 0; i < graph[node].length; i++) {
      const [linked, value] = graph[node][i];
      if (visited[linked - 1] === 0) {
        if (d[linked] > d[node] + value) {
          d[linked] = d[node] + value;
        }
      }
    }
    q.push(findNextNode(d, visited));
    index++;
  }
};

dij();

console.log(d[n]);
