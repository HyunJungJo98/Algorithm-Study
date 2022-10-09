const fs = require("fs");
let input = fs
  .readFileSync("./DFS, BFS/1260input.txt")
  .toString()
  .split("\r\n");

// 제출용
//   let input = fs
//   .readFileSync("dev/stdin")
//   .toString()
//   .split("\n");

const firstline = input[0].split(" ");
const n = Number(firstline[0]);
const m = Number(firstline[1]);
const start = Number(firstline[2]);

const visited = new Array(n + 1).fill(0);
const visited2 = new Array(n + 1).fill(0);
const graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
for (let i = 1; i < m + 1; i++) {
  const nodes = input[i].split(" ");
  graph[Number(nodes[0])][Number(nodes[1])] = 1;
  graph[Number(nodes[1])][Number(nodes[0])] = 1;
}

const result = [];

dfs(visited2, graph, start);
console.log(result.join(" "));
bfs(visited, graph, start);

function bfs(visited, graph, start) {
  const q = [start];
  visited[start] = 1;

  const result = [];

  while (q.length !== 0) {
    const node = q.shift();
    result.push(node);
    for (let i = 1; i < n + 1; i++) {
      if (graph[node][i] === 1 && visited[i] === 0) {
        q.push(i);
        visited[i] = 1;
      }
    }
  }

  console.log(result.join(" "));
}

function dfs(visited, graph, start) {
  result.push(start);
  visited[start] = 1;
  for (let i = 1; i < n + 1; i++) {
    if (graph[start][i] === 1 && visited[i] === 0) {
      dfs(visited, graph, i);
    }
  }
}
