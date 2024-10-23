const fs = require('fs');
const input = fs
  .readFileSync('./DP/1516input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const n = +input[0];
const buildings = input
  .slice(1)
  .map((building) => building.split(' ').slice(0, -1).map(Number));

const graph = Array.from({ length: n + 1 }, () => []); // 이어져있는 노드들
const indegrees = Array(n + 1).fill(0); // 각 노드의 진입 노드 개수
const times = Array(n + 1).fill(0); // 각 노드의 건설 시간
const result = Array(n + 1).fill(0); // 최소 건설 시간
const q = [];

for (let i = 0; i < n; i++) {
  // 각 노드의 건설 시간 저장
  times[i + 1] = buildings[i].shift();
  // 현재 노드 = 목적지(to)
  const toNode = i + 1;

  for (const fromNode of buildings[i]) {
    // 나중에 특정 노드에서 진출하는 간선들을 파악하고 하나씩 제거하기 위해 저장
    graph[fromNode].push(toNode);
    // 진입 노드 개수 저장
    indegrees[toNode]++;
  }
}

// 위상 정렬 시작
for (let i = 1; i < n + 1; i++) {
  // 진입 노드 개수가 0인 노드들을 q에 넣음
  // 진입 노드 개수가 0이라면 바로 지을 수 있는 건물이므로 result에 저장
  if (indegrees[i] === 0) {
    q.push(i);
    result[i] = times[i];
  }
}

while (q.length) {
  const from = q.shift();

  // from과 연결되어 있는 노드들을 하나씩 순회
  for (const to of graph[from]) {
    // 간선을 하나씩 지움(진입 노드가 없어졌기 때문에)
    indegrees[to]--;
    // 진입 노드가 0이 되면 q에 넣음
    if (indegrees[to] === 0) {
      q.push(to);
    }
    result[to] = Math.max(result[to], result[from] + times[to]);
  }
}

result.shift();
console.log(result.join(' '));
