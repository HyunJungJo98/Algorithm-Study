const fs = require('fs');
const input = fs
  .readFileSync('./대기업 코테에서 나오는 유형 모음/1027input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const height = input[1].split(' ').map(Number);

let answer = 0;

for (let i = 0; i < n; i++) {
  const cur = height[i];
  let [left, right] = [i - 1, i + 1];
  const stack = [];
  let cnt = 0;

  // 왼쪽 빌딩 감소할 때까지 담기
  while (left >= 0) {
    if (!stack.length) {
      stack.push(height[left]);
    } else if (stack[stack.length - 1] > height[left]) {
      stack.push(height[left]);
    } else {
      break;
    }
    left--;
  }

  // 왼쪽 빌딩 증가할 때까지 담기
  while (left >= 0) {
    if (!stack.length) {
      stack.push(height[left]);
    } else if (stack[stack.length - 1] >= height[left]) {
      break;
    } else {
      stack.push(height[left]);
    }
    left--;
  }

  cnt += stack.length;
  stack.length = 0;

  console.log(i, stack);

  // 오른쪽 빌딩 감소할 때까지 담기
  while (right < n) {
    if (!stack.length) {
      stack.push(height[right]);
    } else if (stack[stack.length - 1] > height[right]) {
      stack.push(height[right]);
    } else {
      break;
    }
    right++;
  }

  // 오른쪽 빌딩 증가할 때까지 담기
  while (right < n) {
    if (!stack.length) {
      stack.push(height[right]);
    } else if (stack[stack.length - 1] >= height[right]) {
      break;
    } else {
      stack.push(height[right]);
    }
    right++;
  }

  cnt += stack.length;

  console.log(i, stack);

  if (cnt > answer) {
    answer = cnt;
  }
}

console.log(answer);
