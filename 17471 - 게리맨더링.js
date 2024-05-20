const fs = require('fs');
const input = fs
  .readFileSync('./17471input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const nums = input[1].split(' ').map(Number);
const graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

for (let i = 2; i < n + 2; i++) {
  const node = i - 1;
  const link = input[i].split(' ').map(Number);
  link.forEach((v, i) => {
    if (i === 0) {
      return;
    }
    graph[node][v] = 1;
    graph[v][node] = 1;
  });
}

const bfs = (start, visited) => {
  const q = [start];
  visited[start] = 1;
  let index = 0;
  let cnt = 0;

  while (index < q.length) {
    const node = q[index];
    cnt += nums[node - 1];
    for (let i = 1; i < n + 1; i++) {
      if (graph[node][i] === 1 && visited[i] === 0) {
        q.push(i);
        visited[i] = 1;
      }
    }
    index++;
  }

  return cnt;
};

const visited = Array(n + 1).fill(0);
const result = [];
let linked = 0;
for (let i = 1; i < n + 1; i++) {
  if (visited[i] === 0) {
    result.push(bfs(i, visited));
    linked++;
  }
}

if (linked > 2) {
  console.log(-1);
  process.exit(0);
}

if (linked === 2) {
  console.log(Math.abs(result[0] - result[1]));
  process.exit(0);
}

let answer = Infinity;

const isConnected = (g) => {
  const q = [g[0]];
  const visited = Array(n + 1).fill(0);
  let index = 0;
  let cnt = 1;
  let result = 0;
  visited[g[0]] = 1;

  while (q.length > index) {
    const node = q[index];
    result += nums[node - 1];
    for (let i = 1; i < n + 1; i++) {
      if (graph[node][i] === 1 && g.includes(i) && visited[i] === 0) {
        q.push(i);
        visited[i] = 1;
        cnt++;
      }
    }
    index++;
  }

  if (cnt === g.length) {
    return result;
  } else {
    return false;
  }
};

const getGroup = (stack) => {
  const g = [];
  for (let i = 1; i < n + 1; i++) {
    if (!stack.includes(i)) {
      g.push(i);
    }
  }
  return g;
};

const dfs = (stack, len, visited) => {
  if (stack.length === len) {
    const g = getGroup(stack);
    const result1 = isConnected(stack);
    const result2 = isConnected(g);
    if (!result1 || !result2) {
      return;
    }

    answer = Math.min(answer, Math.abs(result1 - result2));
    return;
  }

  for (let i = 1; i < n + 1; i++) {
    if (visited[i] === 0) {
      stack.push(i);
      visited[i] = 1;
      dfs(stack, len, visited);
      stack.pop();
      visited[i] = 0;
    }
  }
};

for (let i = 1; i < Math.floor(n / 2) + 1; i++) {
  const visited = Array(n + 1).fill(0);
  dfs([], i, visited);
}

console.log(answer);
