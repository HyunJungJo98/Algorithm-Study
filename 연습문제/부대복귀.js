const bfs = (n, graph, destination) => {
  const cost = Array(n + 1).fill(-1);
  const q = [[destination, 0]];
  let index = 0;

  cost[destination] = 0;

  while (index < q.length) {
    const [node, dep] = q[index];
    for (let i = 0; i < graph[node].length; i++) {
      if (cost[graph[node][i]] === -1) {
        q.push([graph[node][i], dep + 1]);
        cost[graph[node][i]] = dep + 1;
      }
    }
    index++;
  }

  return cost;
};

function solution(n, roads, sources, destination) {
  const graph = Array.from(Array(n + 1), () => Array(0));

  roads.map(([node1, node2]) => {
    graph[node1].push(node2);
    graph[node2].push(node1);
  });

  const cost = bfs(n, graph, destination);

  return sources.map((source) => cost[source]);
}

console.log(
  solution(
    5,
    [
      [1, 2],
      [1, 4],
      [2, 4],
      [2, 5],
      [4, 5],
    ],
    [1, 3, 5],
    5
  )
);
