const fs = require('fs');
const input = fs
  .readFileSync('./삼성 SW 역량 테스트 기출 문제/14889input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const half = n / 2;
const s = input.slice(1).map((line) => line.split(' ').map(Number));
const visited = Array(n + 1).fill(0);
const stack = [];
const collaborations = [];
let score = [0, 0];
let result = -1;

// 팀 나누기
const makeTeam = (start) => {
  if (stack.length === half) {
    collaborations.push([...stack]);
    return;
  }
  for (let i = start; i < n + 1; i++) {
    visited[i] = 1;
    stack.push(i);
    makeTeam(i + 1);
    visited[i] = 0;
    stack.pop();
  }
};

const calScore = (team, stack, teamNum) => {
  if (stack.length === 2) {
    score[teamNum] += s[stack[0] - 1][stack[1] - 1];
    return;
  }
  for (let i = 0; i < half; i++) {
    if (stack.includes(team[i])) {
      continue;
    }
    stack.push(team[i]);
    calScore(team, stack, teamNum);
    stack.pop();
  }
};

const findMin = () => {
  const l = collaborations.length / 2;
  for (let i = 0; i < l; i++) {
    const start = collaborations[i];
    const link = collaborations[collaborations.length - i - 1];
    calScore(start, [], 0);
    calScore(link, [], 1);

    const dif = Math.abs(score[0] - score[1]);
    if (result === -1) {
      result = dif;
    } else if (result > dif) {
      result = dif;
    }
    score[0] = 0;
    score[1] = 0;
  }
};

makeTeam(1);
findMin();

console.log(result);
