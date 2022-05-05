const bfs = (arr, n) => {
  let visited = new Array(n + 1).fill(0);
  let graph = Array.from(new Array(n + 1), () => new Array());
  let q = [];

  for (let i = 0; i < arr.length; i++) {
    graph[arr[i][0]].push(arr[i][1]);
    graph[arr[i][1]].push(arr[i][0]);
  }

  q.push([arr[0][0], 0]);
  visited[arr[0][0]] = 1;

  let d = 1;

  while (q.length !== 0) {
    const a = q.shift();
    const node = a[0];
    let dep = a[1];
    for (let i = 0; i < graph[node].length; i++) {
      if (visited[graph[node][i]] === 0) {
        q.push([graph[node][i], dep + 1]);
        visited[graph[node][i]] = 1;
        d++;
      }
    }
  }

  const d2 = n - d;

  return Math.abs(d - d2);
};

function solution(n, wires) {
  let answer = n;

  for (let i = 0; i < wires.length; i++) {
    const a = wires.splice(i, 1);
    const b = [a[0][0], a[0][1]];
    const result = bfs(wires, n);
    if (result < answer) {
      answer = result;
    }
    wires.splice(i, 0, b);
  }
  return answer;
}

const n = 7;
const wires = [
  [1, 2],
  [2, 7],
  [3, 7],
  [3, 4],
  [4, 5],
  [6, 7],
];
console.log(solution(n, wires));
