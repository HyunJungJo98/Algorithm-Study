const fs = require('fs');
const input = fs
  .readFileSync('./대기업 코테에서 나오는 유형 모음/1863input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const coor = input.slice(1).map((xy) => xy.split(' ').map(Number));
const buildings = [0];

for (let i = 1; i < n; i++) {
  let cnt = coor[i][0] - coor[i - 1][0];
  const y = coor[i - 1][1];
  while (cnt) {
    buildings.push(y);
    cnt--;
  }
}
buildings.push(coor[n - 1][1]);

const stack = [];
let cnt = 0;

for (let i = 1; i < buildings.length; i++) {
  if (buildings[i] === 0) {
    stack.length = 0;
    continue;
  }
  while (stack.length && stack[stack.length - 1] > buildings[i]) {
    stack.pop();
  }

  if (stack.length === 0 || buildings[i] > stack[stack.length - 1]) {
    stack.push(buildings[i]);
    cnt++;
  }
}

console.log(cnt);
