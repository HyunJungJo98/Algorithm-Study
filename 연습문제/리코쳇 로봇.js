const getDP = (board, g, r) => {
  return board.map((line, i) =>
    Array.from(line).map((s, j) => {
      if (s === 'D') {
        return s;
      }
      if (s === 'R') {
        r.push(i);
        r.push(j);
      } else if (s === 'G') {
        g.push(i);
        g.push(j);
      }
      return 0;
    })
  );
};

// 상하좌우
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
const d = [1, 0, 3, 2];

const isMoveable = (nx, ny, dp) => {
  return (
    ny >= 0 &&
    ny < dp.length &&
    nx >= 0 &&
    nx < dp[0].length &&
    dp[ny][nx] !== 'D'
  );
};

const setDPValue = (dp, dir, y, x, dep) => {
  let isCircle = 0;
  while (isMoveable(x, y, dp)) {
    x += dx[dir];
    y += dy[dir];
  }
  const [ry, rx] = [y - dy[dir], x - dx[dir]];

  // 처음 가는 길이거나 이미 갔던 방법보다 더 적은 횟수로 갈 수 있으면 변경
  if (dp[ry][rx] === 0 || dep + 1 <= dp[ry][rx]) {
    dp[ry][rx] = dep + 1;
  } else {
    // 아니면 가지 않음
    isCircle = 1;
  }

  return [ry, rx, isCircle];
};

const bfs = (dp, g, r) => {
  // 현재 좌표, 왔던 방향, 깊이
  const q = [[...r, -1, 0]];
  let index = 0;

  while (index < q.length) {
    const [y, x, dir, dep] = q[index];
    // 말이 다시 원점으로 돌아왔거나 G 위치에 있으면 넘기기
    if (
      (index !== 0 && y === r[0] && x === r[1]) ||
      (y === g[0] && x === g[1])
    ) {
      index++;
      continue;
    }
    for (let i = 0; i < dx.length; i++) {
      // 왔던 방향, 왔던 방향 반대 방향은 넘어감
      if (i === dir || i === d[dir]) {
        continue;
      }
      const [ny, nx] = [y + dy[i], x + dx[i]];
      if (isMoveable(nx, ny, dp)) {
        // 해당 방향으로 이동하면서 dp값 변경
        const [ry, rx, isCircle] = setDPValue(dp, i, ny, nx, dep);
        // 맨 마지막 좌표만 push
        if (!isCircle) {
          q.push([ry, rx, i, dep + 1]);
        }
      }
    }
    index++;
  }
};

function solution(board) {
  const g = [];
  const r = [];

  const dp = getDP(board, g, r);
  bfs(dp, g, r);

  return dp[g[0]][g[1]] === 0 ? -1 : dp[g[0]][g[1]];
}

console.log(solution(['.D.R', '....', '.G..', '...D']));
