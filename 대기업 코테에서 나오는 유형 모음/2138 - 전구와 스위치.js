const fs = require('fs');
const input = fs
  .readFileSync('./대기업 코테에서 나오는 유형 모음/2138input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const lights = input[1].split('').map(Number);
const targets = input[2].split('').map(Number);

const clickFirst = [...lights];
const notClickFirst = [...lights];

const clickLights = (lights) => {
  let cnt = 0;
  for (let i = 1; i < n; i++) {
    // i-1번째 전구가 타겟과 같지 않으면 i번째 스위치 클릭
    if (targets[i - 1] === lights[i - 1]) {
      continue;
    }
    cnt++;
    lights[i] = 1 - lights[i];
    lights[i - 1] = 1 - lights[i - 1];
    if (i !== n - 1) {
      lights[i + 1] = 1 - lights[i + 1];
    }
  }

  const same = lights.every((lights, index) => lights === targets[index]);
  return same ? cnt : 100001;
};

// 첫 번째 스위치 클릭
clickFirst[0] = 1 - clickFirst[0];
clickFirst[1] = 1 - clickFirst[1];

// 첫 번째 스위치를 클릭했으므로 +1
const fitstAnswer = clickLights(clickFirst) + 1;
const secondAnswer = clickLights(notClickFirst);

const answer = Math.min(fitstAnswer, secondAnswer);

if (answer === 100001) {
  console.log(-1);
} else {
  console.log(answer);
}
