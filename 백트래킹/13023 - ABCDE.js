const fs = require('fs');
const input = fs
  .readFileSync('./백트래킹/13023input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
// 2차원 배열에 저장하지 말고 객체에 저장해보기
const friends = Array.from(Array(n), () => Array(n).fill(0));
const visited = Array.from(Array(n), () => Array(n).fill(0));
for (let i = 1; i < m + 1; i++) {
  const [a, b] = input[i].split(' ');
  friends[+a][+b] = 1;
  friends[+b][+a] = 1;
}

const relation = [];
let isExist = 0;

const dfs = (row) => {
  if (relation.length === 5 || isExist === 1) {
    isExist = 1;
    return;
  }

  for (let i = 0; i < n; i++) {
    if (
      friends[row][i] === 1 &&
      visited[row][i] === 0 &&
      visited[i][row] === 0
    ) {
      relation.push(i);
      visited[row][i] = 1;
      visited[i][row] = 1;
      dfs(i);
      visited[row][i] = 0;
      visited[i][row] = 0;
      relation.pop();
    }
  }
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (friends[i][j] === 1 && isExist === 0) {
      relation.push(i);
      relation.push(j);
      visited[i][j] = 1;
      visited[j][i] = 1;
      dfs(j);
      visited[i][j] = 0;
      visited[j][i] = 0;
      relation.pop();
      relation.pop();
    }
  }
}

console.log(isExist);
