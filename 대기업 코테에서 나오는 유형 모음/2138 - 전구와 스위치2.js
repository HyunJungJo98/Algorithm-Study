const fs = require('fs');
const input = fs
  .readFileSync('./대기업 코테에서 나오는 유형 모음/2138input2.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const lights = input[1].split('').map(Number);
const targets = input[2].split('').map(Number);

const isTarget = (lights) => {
  return lights.every((light, i) => light === targets[i]);
};

// 처음부터 같을 때
if (isTarget(lights)) {
  console.log(0);
  process.exit(0);
}

const lights1 = [...lights];
const lights2 = [...lights];

let result = 0;

// 첫 번째 전구 스위치 눌렀을 때
lights1[0] = 1 - lights1[0];
lights1[1] = 1 - lights1[1];

let cnt = 1;
for (let i = 1; i < n; i++) {
  if (lights1[i - 1] !== targets[i - 1]) {
    cnt++;
    lights1[i - 1] = 1 - lights1[i - 1];
    lights1[i] = 1 - lights1[i];
    if (i !== n - 1) {
      lights1[i + 1] = 1 - lights1[i + 1];
    }
  }
}

if (isTarget(lights1)) {
  result = cnt;
}

// 첫 번째 전구 스위치 안 눌렀을 때
cnt = 0;
for (let i = 1; i < n; i++) {
  if (lights2[i - 1] !== targets[i - 1]) {
    cnt++;
    lights2[i - 1] = 1 - lights2[i - 1];
    lights2[i] = 1 - lights2[i];
    if (i !== n - 1) {
      lights2[i + 1] = 1 - lights2[i + 1];
    }
  }
}

if (isTarget(lights2)) {
  if (!result) {
    result = cnt;
  } else {
    result = Math.min(result, cnt);
  }
}

if (!result) {
  console.log(-1);
} else {
  console.log(result);
}
