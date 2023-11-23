const checkDiagonal = (board, row, col, n) => {
  let j = col - 1;
  let k = col + 1;
  for (let i = row - 1; i >= 0 && j >= 0; i-- && j--) {
    // console.log(i, j);
    if (board[i][j] === 1) {
      return false;
    }
  }
  for (let i = row - 1; i >= 0 && k < n; i-- && k++) {
    if (board[i][k] === 1) {
      return false;
    }
  }
  return true;
};

let answer = 0;
const dfs = (n, visited, board, row) => {
  if (visited.every((v) => v)) {
    return answer++;
  }
  // console.log('visited:', visited);
  // 세로에 퀸이 없고 대각선에도 없을 때
  for (let i = 0; i < n; i++) {
    if (visited[i] === 0 && checkDiagonal(board, row, i, n)) {
      // console.log('row:', row, 'col:', i);
      visited[i] = 1;
      board[row][i] = 1;
      dfs(n, visited, board, row + 1);
      visited[i] = 0;
      board[row][i] = 0;
    }
  }
};

function solution(n) {
  const visited = Array(n).fill(0);
  const board = Array.from(Array(n), () => Array(n).fill(0));

  // 첫 번째 줄 퀸을 i 번째에 놨을 때
  for (let i = 0; i < n; i++) {
    visited[i] = 1;
    board[0][i] = 1;
    dfs(n, visited, board, 1);
    visited[i] = 0;
    board[0][i] = 0;
  }

  return answer;
}

console.log(solution(4));
