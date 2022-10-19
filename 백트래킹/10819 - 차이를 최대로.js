const fs = require('fs');
// const input = fs
//   .readFileSync('./백트래킹/10819input.txt')
//   .toString()
//   .split('\r\n');

const input = fs.readFileSync('dev/stdin').toString().split('\n');

const n = Number(input[0]);

const cal = (arr) => {
  let result = 0;
  for (let i = 0; i < n - 1; i++) {
    result += Math.abs(arr[i] - arr[i + 1]);
  }
  return result;
};

const result = [];
let answer = 0;
const dfs = (arr, visited) => {
  if (result.length === n) {
    const calresult = cal(result);
    if (calresult > answer) {
      answer = calresult;
    }
    return;
  }
  for (let i = 0; i < n; i++) {
    if (visited[i] === 0) {
      result.push(arr[i]);
      visited[i] = 1;
      dfs(arr, visited);
      result.pop();
      visited[i] = 0;
    }
  }
};

const arr = input[1].split(' ').map(Number);
const visited = Array(n).fill(0);
dfs(arr, visited);
console.log(answer);
