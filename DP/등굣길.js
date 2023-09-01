// 시간 초과
// function solution(m, n, puddles) {
//   const road = Array.from(new Array(n), () => Array(m).fill(0));
//   const q = [[0, 0]];
//   let index = 0;

//   puddles.forEach((puddle) => {
//     const [x, y] = puddle;
//     road[y - 1][x - 1] = -1;
//   });

//   while (index !== q.length) {
//     const [y, x] = q[index];
//     for (let i = 0; i < 2; i++) {
//       const ny = dy[i] + y;
//       const nx = dx[i] + x;
//       if (0 <= ny && n > ny && 0 <= nx && m > nx) {
//         if (road[ny][nx] !== -1) {
//           road[ny][nx] += 1;
//           road[ny][nx] %= R;
//           q.push([ny, nx]);
//         }
//       }
//     }
//     index++;
//   }

//   return road[n - 1][m - 1];
// }

const m = 4;
const n = 3;
puddles = [[2, 2]];

const dx = [0, 1];
const dy = [1, 0];
const R = 1000000007;

function solution(m, n, puddles) {
  const road = Array.from(Array(n), () => Array(m).fill(0));

  puddles.forEach((puddle) => {
    const [x, y] = puddle;
    road[y - 1][x - 1] = -1;
  });

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === 0 && j === 0) {
        road[i][j] = 1;
        continue;
      }
      if (road[i][j] === -1) {
        road[i][j] = 0;
      } else if (i === 0) {
        road[i][j] = road[i][j - 1] % R;
      } else if (j === 0) {
        road[i][j] = road[i - 1][j] % R;
      } else {
        road[i][j] = road[i - 1][j] + road[i][j - 1];
        road[i][j] %= R;
      }
    }
  }

  return road[n - 1][m - 1];
}

console.log(solution(m, n, puddles));
