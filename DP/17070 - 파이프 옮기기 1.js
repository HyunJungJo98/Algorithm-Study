const fs = require('fs');
const input = fs
  .readFileSync('./DP/17070input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const home = input.slice(1).map((line) => line.split(' ').map(Number));

if (
  home[n - 1][n - 1] === 1 ||
  (home[n - 2][n - 1] === 1 && home[n - 1][n - 2] === 1)
) {
  console.log(0);
  process.exit(0);
}

const dp = Array.from(Array(n), () =>
  Array.from(Array(n), () => Array(3).fill(0))
);

// 가로로 이동 가능한지 확인
const canMoveH = (y, x) => {
  //   console.log('가로', y, x);
  if (x + 1 < n && home[y][x + 1] === 0) {
    return true;
  }
  return false;
};
// 세로로 이동 가능한지 확인
const canMoveV = (y, x) => {
  //   console.log('세로', y, x);
  if (y + 1 < n && home[y + 1][x] === 0) {
    return true;
  }
  return false;
};
// 대각선으로 이동 가능한지 확인
const canMoveD = (y, x) => {
  //   console.log('대각선', y, x);
  if (
    x + 1 < n &&
    y + 1 < n &&
    home[y + 1][x] === 0 &&
    home[y][x + 1] === 0 &&
    home[y + 1][x + 1] === 0
  ) {
    return true;
  }
  return false;
};

const moveH = (i, j, h) => {
  // 가로로 옮길 수 있으면
  if (canMoveH(i, j)) {
    dp[i][j + 1][0] += h;
  }

  // 대각선으로 옮길 수 있으면
  if (canMoveD(i, j)) {
    dp[i + 1][j + 1][2] += h;
  }
};

const moveV = (i, j, v) => {
  // 세로로 옮길 수 있으면
  if (canMoveV(i, j)) {
    dp[i + 1][j][1] += v;
  }
  // 대각선으로 옮길 수 있으면
  if (canMoveD(i, j)) {
    dp[i + 1][j + 1][2] += v;
  }
};

const moveD = (i, j, d) => {
  // 가로로 옮길 수 있으면
  if (canMoveH(i, j)) {
    dp[i][j + 1][0] += d;
  }
  // 세로로 옮길 수 있으면
  if (canMoveV(i, j)) {
    dp[i + 1][j][1] += d;
  }
  // 대각선으로 옮길 수 있으면
  if (canMoveD(i, j)) {
    dp[i + 1][j + 1][2] += d;
  }
};

// 가로, 세로, 대각선으로 걸칠 수 있는 경우의 수
dp[0][1] = [1, 0, 0];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (i === 0 && j === 0) {
      continue;
    }
    const [h, v, d] = dp[i][j];

    // 가로 방향이 있으면
    if (h > 0) {
      // 가로, 대각선으로 옮기기
      moveH(i, j, h);
    }
    // 세로 방향이 있으면
    if (v > 0) {
      // 세로, 대각선으로 옮기기
      moveV(i, j, v);
    }
    // 대각선 방향이 있으면
    if (d > 0) {
      // 가로, 세로, 대각선으로 옮기기
      moveD(i, j, d);
    }
  }
}

console.log(dp[n - 1][n - 1].reduce((prev, cur) => prev + cur, 0));

// 시간초과

// // y, x, 방향
// const q = [[0, 1, 0]];
// let index = 0;

// // 가로로 이동 가능한지 확인
// const canMoveH = (y, x) => {
//   //   console.log('가로', y, x);
//   if (x + 1 < n && home[y][x + 1] === 0) {
//     return [true, y, x + 1, 0];
//   }
//   return [false];
// };
// // 세로로 이동 가능한지 확인
// const canMoveV = (y, x) => {
//   //   console.log('세로', y, x);
//   if (y + 1 < n && home[y + 1][x] === 0) {
//     return [true, y + 1, x, 1];
//   }
//   return [false];
// };
// // 대각선으로 이동 가능한지 확인
// const canMoveD = (y, x) => {
//   //   console.log('대각선', y, x);
//   if (
//     x + 1 < n &&
//     y + 1 < n &&
//     home[y + 1][x] === 0 &&
//     home[y][x + 1] === 0 &&
//     home[y + 1][x + 1] === 0
//   ) {
//     return [true, y + 1, x + 1, 2];
//   }
//   return [false];
// };

// const check = (dir) => {
//   // 현재 파이프 방향이 가로이면 가로, 대각선 확인
//   if (dir === 0) {
//     return [canMoveH, canMoveD];
//   }
//   if (dir === 1) {
//     return [canMoveV, canMoveD];
//   }
//   return [canMoveH, canMoveV, canMoveD];
// };

// while (index !== q.length) {
//   const [y, x, d] = q[index];
//   const funs = check(d);
//   funs.map((fun) => {
//     const [c, ...newD] = fun(y, x);
//     if (c) {
//       dp[newD[0]][newD[1]] += 1;
//       if (newD[0] !== n - 1 || newD[1] !== n - 1) {
//         q.push(newD);
//       }
//     }
//   });
//   index++;
// }

// console.log(dp[n - 1][n - 1]);
