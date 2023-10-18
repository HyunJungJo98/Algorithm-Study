const getMin = (d, visited) => {
  let min = 100000000;
  let index = 0;
  for (let i = 1; i < d.length; i++) {
    if (visited[i]) {
      continue;
    }
    if (min > d[i]) {
      min = d[i];
      index = i;
    }
  }
  return index;
};

const dijkstra = (start, n, graph) => {
  const d = Array(n + 1).fill(100000000);
  const visited = Array(n + 1).fill(0);
  let q = [start, 0];
  let index = 0;

  d[start] = 0;

  while (index < d.length - 1) {
    const [node, w] = q;
    visited[node] = 1;

    if (d[node] < w) {
      index++;
      continue;
    }
    for (let i = 0; i < graph[node].length; i++) {
      const [linkedNode, linkedW] = graph[node][i];
      if (!visited[linkedNode]) {
        if (w + linkedW < d[linkedNode]) {
          d[linkedNode] = w + linkedW;
        }
      }
    }
    const newNode = getMin(d, visited);
    q = [newNode, d[newNode]];
    index++;
  }

  return d;
};

function solution(n, s, a, b, fares) {
  const graph = Array.from(Array(n + 1), () => Array(0));

  fares.forEach((fare) => {
    const [node1, node2, w] = fare;
    graph[node1].push([node2, w]);
    graph[node2].push([node1, w]);
  });

  const sd = dijkstra(s, n, graph);
  const ad = dijkstra(a, n, graph);
  const bd = dijkstra(b, n, graph);

  let min = ad[s] + bd[s];

  for (let i = 1; i < sd.length; i++) {
    if (sd[i] + ad[i] + bd[i] < min) {
      min = sd[i] + ad[i] + bd[i];
    }
  }
  return min;
}

console.log(
  solution(6, 4, 5, 6, [
    [2, 6, 6],
    [6, 3, 7],
    [4, 6, 7],
    [6, 5, 11],
    [2, 5, 12],
    [5, 3, 20],
    [2, 4, 8],
    [4, 3, 9],
  ])
);
