const fs = require('fs');
const input = fs
  .readFileSync('./대기업 코테에서 나오는 유형 모음/20055input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const a = input[1].split(' ').map(Number);
const dur = a.slice(0);
const robots = Array(n * 2).fill(0);

let cnt = 0;
let [start, end] = [0, n - 1];

// dur에 0이 k개 이상 있으면 true 반환
const checkDur = (k, dur) => {
  return dur.filter((e) => e === 0).length >= k;
};

// 한 칸 회전
const getNewStartAndEnd = (start, end) => {
  return [start === 0 ? n * 2 - 1 : start - 1, end === 0 ? n * 2 - 1 : end - 1];
};

// 내리는 위치(N)에 있는 로봇 내리기
const outRobot = () => {
  if (robots[end] === 1) {
    robots[end] = 0;
  }
};

const getFirstRobot = (last) => {
  return last - 1 < 0 ? n * 2 - 1 : last - 1;
};

// 로봇 이동
const moveRobots = () => {
  let last = start + n - 1 < n * 2 ? start + n - 1 : start + n - 1 - n * 2;
  let prev = getFirstRobot(last);
  for (let i = 0; i < n - 1; i++) {
    if (robots[prev] === 1 && robots[last] === 0 && dur[last] > 0) {
      robots[prev] = 0;
      robots[last] = 1;
      dur[last] -= 1;
    }
    last = getFirstRobot(last);
    prev = getFirstRobot(prev);
  }
};

// 로봇 올리기
const inNewRobot = () => {
  // 올리는 위치에 있는 칸의 내구도가 0이 아니면
  if (dur[start] === 0) {
    return;
  }
  dur[start] -= 1;
  robots[start] = 1;
};

while (!checkDur(k, dur)) {
  cnt++;
  [start, end] = getNewStartAndEnd(start, end);
  outRobot();
  moveRobots();
  outRobot();
  inNewRobot();
}

console.log(cnt);
