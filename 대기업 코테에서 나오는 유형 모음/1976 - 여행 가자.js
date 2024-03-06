const fs = require('fs');
const input = fs
  .readFileSync('./대기업 코테에서 나오는 유형 모음/1976input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const m = +input[1];
const plan = input[input.length - 1].split(' ').map(Number);
const city = Array.from(Array(n + 1), () => Array(1).fill(0));
const trip = [0];

input.slice(2, 2 + n).map((c, i) =>
  c.split(' ').map((num) => {
    city[i + 1].push(Number(num));
  })
);

const travel = (start) => {
  const q = [start];
  let index = 0;
  const visited = Array(n + 1).fill(0);

  while (index < q.length) {
    const cur = q[index];
    visited[cur] = 1;
    for (let i = 1; i < n + 1; i++) {
      if (city[cur][i] === 1 && visited[i] === 0) {
        q.push(i);
      }
    }
    index++;
  }

  return visited;
};

for (let i = 1; i < n + 1; i++) {
  trip.push(travel(i, i));
}

let start = plan[0];

for (let i = 1; i < m; i++) {
  if (trip[start][plan[i]] === 0) {
    console.log('NO');
    process.exit(0);
  }
  start = plan[i];
}

console.log('YES');
