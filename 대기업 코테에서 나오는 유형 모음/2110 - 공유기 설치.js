const fs = require('fs');
const input = fs
  .readFileSync('./대기업 코테에서 나오는 유형 모음/2110input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, c] = input[0].split(' ').map(Number);
const house = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);

// 해당 거리가 가능한지 확인
const isPossible = (distance) => {
  let cnt = c - 1;
  let prev = house[0];
  for (let i = 1; i < n; i++) {
    if (house[i] - prev >= distance) {
      cnt--;
      prev = house[i];
    }
  }
  return cnt <= 0;
};

let [left, right] = [1, house[house.length - 1]];

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  if (isPossible(mid)) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(right);
