const fs = require('fs');
const input = fs
  .readFileSync('./대기업 코테에서 나오는 유형 모음/14658input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m, l, k] = input[0].split(' ').map(Number);
const stars = input.slice(1).map((line) => line.split(' ').map(Number));

let answer = 0;

for (let i = 0; i < k; i++) {
  for (let j = 0; j < k; j++) {
    const [x1, y1] = [
      Math.min(stars[i][0], stars[j][0]),
      Math.min(stars[i][1], stars[j][1]),
    ];
    let cnt = 0;
    for (let p = 0; p < k; p++) {
      const [x2, y2] = stars[p];
      if (x1 <= x2 && x2 <= x1 + l && y1 <= y2 && y2 <= y1 + l) {
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }
}

console.log(k - answer);

// 반례1
// 8 8 5 4
// 0 4
// 4 0
// 8 4
// 4 8

// 반례2
// 4 4 4 4
// 0 2
// 2 0
// 4 2
// 2 4

// const starsCoord = {};
// stars.forEach(([x, y]) => {
//   if (starsCoord[x]) {
//     starsCoord[x][y] = 1;
//   } else {
//     starsCoord[x] = {};
//     starsCoord[x][y] = 1;
//   }
// });

// // 트램펄린이 n, m 이내에 있을 때
// const isRange = (x, y) => {
//   //   return x <= n && x >= 0 && y <= m && y >= 0;
//   return true;
// };

// // 트램펄린 안에 있는 별의 개수 세기
// // 파라미터 : 오름차순
// const getStarsNum = (x1, x2, y1, y2) => {
//   //   console.log('-----');
//   let cnt = 0;

//   for (let i = 0; i < k; i++) {
//     const [x, y] = stars[i];
//     if (x >= x1 && x <= x2 && y >= y1 && y <= y2) {
//       cnt++;
//     }
//   }

//   return cnt;
// };

// for (let i = 0; i < k; i++) {
//   const [x, y] = stars[i];

//   // 왼쪽 위 모서리
//   let [nx, ny] = [x + l, y - l];
//   if (isRange(nx, ny)) {
//     answer = Math.max(answer, getStarsNum(x, nx, ny, y));
//   }

//   // 왼쪽 아래 모서리
//   [nx, ny] = [x + l, y + l];
//   if (isRange(nx, ny)) {
//     answer = Math.max(answer, getStarsNum(x, nx, y, ny));
//   }

//   // 오른쪽 위 모서리
//   [nx, ny] = [x - l, y - l];
//   if (isRange(nx, ny)) {
//     answer = Math.max(answer, getStarsNum(nx, x, ny, y));
//   }

//   // 오른쪽 아래 모서리
//   [nx, ny] = [x - l, y + l];
//   if (isRange(nx, ny)) {
//     answer = Math.max(answer, getStarsNum(nx, x, y, ny));
//   }
// }
