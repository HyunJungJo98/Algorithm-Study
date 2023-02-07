const fs = require('fs');
const input = fs
  .readFileSync('./구현/2636input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const s = input.slice(1).map((line) => line.split(' ').map(Number));
let cheese = 0;
let cnt = 0;
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const air = (i, j) => {
  const q = [[i, j]];
  let start = 0;

  while (start !== q.length) {
    const [y, x] = q[start];
    dx.forEach((plusx, index) => {
      const nx = plusx + x;
      const ny = dy[index] + y;
      if (nx >= 0 && nx < m && ny >= 0 && ny < n && s[ny][nx] === 0) {
        s[ny][nx] = 2;
        q.push([ny, nx]);
      }
    });
    start++;
  }
};

// 구멍이 아닌 부분 2로 만들기
const makeAir = () => {
  let isAir = false;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (s[i][j] === 0) {
        air(i, j);
        isAir = true;
        break;
      }
    }
    if (isAir) {
      return;
    }
  }
};

const makeC = () => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (s[i][j] === 1) {
        for (let k = 0; k < 4; k++) {
          const nx = dx[k] + j;
          const ny = dy[k] + i;
          if (nx >= 0 && nx < m && ny >= 0 && ny < n && s[ny][nx] === 2) {
            s[i][j] = 'c';
            cheese++;
            break;
          }
        }
      }
    }
  }
};

const melt = () => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (s[i][j] === 'c' || s[i][j] === 2) {
        s[i][j] = 0;
      }
    }
  }
};

const isEmpty = () => {
  return s.every((line) => {
    return line.every((can) => can === 0);
  });
};

while (!isEmpty()) {
  cheese = 0;
  makeAir();
  makeC();
  melt();
  cnt++;
}

console.log(cnt);
console.log(cheese);
