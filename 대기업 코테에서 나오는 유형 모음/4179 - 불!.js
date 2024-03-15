const fs = require('fs');
const input = fs
  .readFileSync('./대기업 코테에서 나오는 유형 모음/4179input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const D = 4;

const [r, c] = input[0].split(' ').map(Number);
const maze = input.slice(1).map((line) => line.split(''));
const exit = [];
let j = [];
// 지훈이의 경로를 남기는 좌표
const jihun = maze.map((line) => [...line]);
// 불의 경로를 남기는 좌표
const fire = maze
  .map((line) => [...line])
  .map((line) =>
    line.map((s) => {
      if (s === 'F') {
        return 0;
      }
      return s;
    })
  );
const fireQ = [];

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

// 출구 표시
for (let y = 0; y < r; y++) {
  for (let x = 0; x < c; x++) {
    if (maze[y][x] === 'J') {
      // 지훈이 위치 저장
      j = [y, x];
    }
    if (maze[y][x] === 'F') {
      fireQ.push([y, x, 0]);
      // 불이 있는 곳 깊이를 0으로 초기화
      fire[y][x] = 0;
    }
    if (
      (x === 0 || x === c - 1 || y === 0 || y === r - 1) &&
      maze[y][x] !== '#'
    ) {
      // 출구 위치 저장
      exit.push([y, x]);
    }
  }
}

const fireBFS = (initQ) => {
  const q = initQ;
  let index = 0;

  while (index < q.length) {
    const [y, x, dep] = q[index];
    for (let i = 0; i < D; i++) {
      const [ny, nx] = [y + dy[i], x + dx[i]];
      if (nx >= 0 && nx < c && ny >= 0 && ny < r) {
        if (fire[ny][nx] === '.' || fire[ny][nx] === 'J') {
          fire[ny][nx] = dep + 1;
          q.push([ny, nx, dep + 1]);
        }
      }
    }
    index++;
  }
};

// 불의 경로를 fire 배열에 저장
fireBFS(fireQ);

// 지훈이가 출구 자리에 있을 때 depth를 계산해주기 위해
jihun[j[0]][j[1]] = 0;

// 지훈이의 경로를 jihun 배열에 저장
const q = [[...j, 0]];
let index = 0;

while (index < q.length) {
  const [y, x, dep] = q[index];
  for (let i = 0; i < D; i++) {
    const [ny, nx] = [y + dy[i], x + dx[i]];
    if (nx >= 0 && nx < c && ny >= 0 && ny < r) {
      if (
        (jihun[ny][nx] === '.' && fire[ny][nx] > dep + 1) || // 불보다 지훈이가 먼저 간 경우
        (jihun[ny][nx] === '.' && fire[ny][nx] === '.') // 아예 불이 안 번진 경우
      ) {
        jihun[ny][nx] = dep + 1;
        q.push([ny, nx, dep + 1]);
      }
    }
  }
  index++;
}

let result = 100000000;
let flag = 0;

for (let i = 0; i < exit.length; i++) {
  const [y, x] = exit[i];
  if (jihun[y][x] !== '.' && result > jihun[y][x] + 1) {
    result = jihun[y][x] + 1;
    flag = 1;
  }
}

if (flag) {
  console.log(result);
} else {
  console.log('IMPOSSIBLE');
}

// 메모리 초과

// // 출구가 없을 때
// if (maze.every((line) => line.every((m) => m === 0))) {
//   console.log('IMPOSSIBLE');
//   process.exit(0);
// }

// const isNoSpace = (maze) => {
//   return maze.every((line) => line.every((m) => m !== '.'));
// };

// const fire = (maze, jy, jx) => {
//   const nMaze = maze.map((m) => [...m]);
//   const f = [];
//   for (let i = 0; i < r; i++) {
//     for (let j = 0; j < c; j++) {
//       if (maze[i][j] === 'F') {
//         f.push([i, j]);
//       }
//     }
//   }

//   for (let i = 0; i < f.length; i++) {
//     const [y, x] = f[i];
//     for (let j = 0; j < D; j++) {
//       const [ny, nx] = [y + dy[j], x + dx[j]];
//       if (ny === jy && nx === jx) {
//         return false;
//       }
//       if (nx >= 0 && nx < c && y >= 0 && y < r) {
//         if (nMaze[ny][nx] !== '#') {
//           nMaze[ny][nx] = 'F';
//         }
//       }
//     }
//   }

//   return nMaze;
// };

// const q = [[j, maze, 0]];
// let index = 0;
// let result = 0;

// while (index < q.length) {
//   const [[y, x], m, dep] = q[index];
//   m[y][x] = dep;
//   if (isNoSpace(m) || exit[y][x] === 1) {
//     result = dep + 1;
//     break;
//   }
//   for (let i = 0; i < D; i++) {
//     const [ny, nx] = [y + dy[i], x + dx[i]];
//     if (nx >= 0 && nx < c && y >= 0 && y < r) {
//       if (m[ny][nx] === '.') {
//         const nMaze = fire(m, ny, nx);
//         q.push([[ny, nx], nMaze, dep + 1]);
//       }
//     }
//   }
//   index++;
// }

// if (result) {
//   console.log(result);
// } else {
//   console.log('IMPOSSIBLE');
// }
