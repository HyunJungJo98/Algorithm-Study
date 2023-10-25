// 시계방향 회전
const rotation = (key) => {
  const m = key.length;
  const newKey = [];

  for (let i = 0; i < m; i++) {
    const arr = [];
    for (let j = m - 1; j >= 0; j--) {
      arr.push(key[j][i]);
    }
    newKey.push(arr);
  }

  return newKey;
};

const makeBoard = (key, lock) => {
  const [n, m] = [lock.length, key.length];
  const board = Array.from(Array((m - 1) * 2 + n), () =>
    Array((m - 1) * 2 + n).fill(0)
  );
  for (let i = m - 1; i < n + m - 1; i++) {
    for (let j = m - 1; j < n + m - 1; j++) {
      board[i][j] = lock[i - m + 1][j - m + 1];
    }
  }

  return board;
};

const check = (board, n, start) => {
  for (let i = start; i < start + n; i++) {
    for (let j = start; j < start + n; j++) {
      if (board[i][j] !== 1) {
        return false;
      }
    }
  }
  return true;
};

const attach = (y, x, board, m, n, key) => {
  const cBoard = board.map((line) => line.map((s) => s));
  let [keyY, keyX] = [0, 0];
  for (let i = y; i < y + m; i++) {
    for (let j = x; j < x + m; j++) {
      cBoard[i][j] += key[keyY][keyX];
      keyX++;
    }
    keyY++;
    keyX = 0;
  }

  return check(cBoard, n, m - 1);
};

function solution(key, lock) {
  let answer = false;
  const [n, m] = [lock.length, key.length];
  const board = makeBoard(key, lock);

  for (let i = 0; i < n + m - 1; i++) {
    for (let j = 0; j < n + m - 1; j++) {
      for (let k = 0; k < 4; k++) {
        key = rotation(key);
        answer = answer || attach(i, j, board, m, n, key);
      }
    }
  }
  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0],
      [1, 0, 0],
      [0, 1, 1],
    ],
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ]
  )
);
