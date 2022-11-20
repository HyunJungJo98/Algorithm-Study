const fs = require('fs');
const input = fs
  .readFileSync('./다익스트라/18352input.txt')
  .toString()
  .trim()
  .split('\r\n');

// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

// graph를 객체로 했을 때는 주석처리함
// 처음에는 d를 987654321로 초기화하고 더 작은 거리를 비교 -> 메모리 초과
// 어차피 가중치가 모두 1이기 때문에 d를 -1로 초기화하고
// -1인지 확인한 후에 최단거리 변경(37번째 줄)
const [n, m, k, x] = input[0].split(' ').map(Number);
const graph = Array.from(Array(n + 1), () => Array());
// const graph = {};
const d = new Array(n + 1).fill(-1);

input.slice(1).map((line) => {
  const [a, b] = line.split(' ').map(Number);
  //   if (graph[a] === undefined) {
  //     graph[a] = [b];
  //   } else {
  graph[a].push(b);
  //   }
});

const q = [x];
let index = 0;
d[x] = 0;
while (true) {
  if (q[index]) {
    const node = q[index];
    // if (graph[node] !== undefined) {
    graph[node].map((n) => {
      if (d[n] === -1) {
        d[n] = d[node] + 1;
        q.push(n);
      }
    });
    // }

    index += 1;
  } else {
    break;
  }
}

const result = [];
d.map((w, idx) => {
  if (w === k) {
    console.log(idx);
    result.push(idx);
  }
});
if (result.length === 0) {
  console.log(-1);
}

// 메모리 초과
// const d = new Array(n + 1).fill(987654321);
// const visited = new Array(n + 1).fill(0);

// let start = x;
// d[start] = 0;
// visited[start] = 1;

// const findNextNode = (start) => {
//   let min = 987654321;
//   let next = 0;
//   d.map((w, idx) => {
//     if (visited[idx] === 0 && min > w) {
//       min = w;
//       next = idx;
//     }
//   });
//   return next;
// };

// for (let i = 0; i < n; i++) {
//   graph[start].map((node) => {
//     d[node] = d[start] + 1 < d[node] ? d[start] + 1 : d[node];
//   });
//   start = findNextNode(start);
// }

// const result = [];
// d.map((w, idx) => {
//   if (w === k) {
//     console.log(idx);
//     result.push(k);
//   }
// });

// if (result.length === 0) {
//   console.log(-1);
// }
