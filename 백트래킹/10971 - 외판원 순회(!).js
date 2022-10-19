const fs = require('fs');
const input = fs
  .readFileSync('./백트래킹/10971input.txt')
  .toString()
  .split('\r\n');

const n = Number(input[0]);
const cost = input.slice(1).map((line) => line.split(' ').map(Number));

let answer = 0;
const result = [];

// 비용 계산하기
const calCost = (arr) => {
  let total = 0;
  for (let i = 0; i < n - 1; i++) {
    total += cost[arr[i] - 1][arr[i + 1] - 1];
  }
  console.log(total);
};

// 순서 정하기
const dfs = (start) => {
  if (result.length === n - 1) {
    result.push(start);
    calCost(result);
    result.pop();
  }
  for (let i = 1; i < n + 1; i++) {
    if (!result.includes(i)) {
      result.push(i);
      dfs(start);
      result.pop();
    }
  }
};

for (let i = 1; i < n + 1; i++) {
  result.push(i);
  dfs(i);
  result.pop();
}
