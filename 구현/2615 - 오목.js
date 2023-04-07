const fs = require('fs');
const input = fs
  .readFileSync('./구현/2615input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const board = input.map((line) => line.split(' ').map(Number));
const N = 19;
const bw = [0, 0, 0];
let coor = [20, 20];

// 가로 체크
const checkH = (i, j, color) => {
  let cnt = 1;
  // 오른쪽 체크
  let k = j + 1;
  while (k < N && board[i][k] === color) {
    cnt++;
    k++;
  }

  // 왼쪽 체크
  k = j - 1;
  while (k >= 0 && board[i][k] === color) {
    cnt++;
    k--;
  }
  if (cnt === 5) {
    return true;
  }
  return false;
};
const checkV = (i, j, color) => {
  let cnt = 1;
  // 아래쪽 체크
  let k = i + 1;
  while (k < N && board[k][j] === color) {
    cnt++;
    k++;
  }

  // 왼쪽 체크
  k = i - 1;
  while (k >= 0 && board[k][j] === color) {
    cnt++;
    k--;
  }

  if (cnt === 5) {
    return true;
  }
  return false;
};
const checkD1 = (i, j, color) => {
  let cnt = 1;
  // ↘ 대각선 체크
  let k = i + 1;
  let l = j + 1;
  while (k < N && l < N && board[k][l] === color) {
    cnt++;
    k++;
    l++;
  }
  // ↖ 대각선 체크
  k = i - 1;
  l = j - 1;
  while (k >= 0 && l >= 0 && board[k][l] === color) {
    cnt++;
    k--;
    l--;
  }

  if (cnt === 5) {
    return true;
  }
  return false;
};
const checkD2 = (i, j, color) => {
  let cnt = 1;
  // ↙ 대각선 체크
  let k = i + 1;
  let l = j - 1;
  while (k < N && l >= 0 && board[k][l] === color) {
    cnt++;
    k++;
    l--;
  }
  // ↗ 대각선 체크
  k = i - 1;
  l = j + 1;
  while (k >= 0 && l < N && board[k][l] === color) {
    cnt++;
    k--;
    l++;
  }

  if (cnt === 5) {
    return true;
  }
  return false;
};

const saveCoor = (i, j) => {
  if (coor[1] > j) {
    coor[0] = i;
    coor[1] = j;
  }
  if (coor[1] === j && coor[0] > i) {
    coor[0] = i;
    coor[1] = j;
  }
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (board[i][j] !== 0) {
      if (checkH(i, j, board[i][j])) {
        bw[board[i][j]] += 1;
        saveCoor(i, j);
      }
      if (checkV(i, j, board[i][j])) {
        bw[board[i][j]] += 1;
        saveCoor(i, j);
      }
      if (checkD1(i, j, board[i][j])) {
        bw[board[i][j]] += 1;
        saveCoor(i, j);
      }
      if (checkD2(i, j, board[i][j])) {
        bw[board[i][j]] += 1;
        saveCoor(i, j);
      }
    }
  }
}

if (bw[1] === bw[2]) {
  console.log(0);
} else {
  if (bw[1] > bw[2]) {
    console.log(1);
  } else {
    console.log(2);
  }
  console.log(coor[0] + 1, coor[1] + 1);
}
