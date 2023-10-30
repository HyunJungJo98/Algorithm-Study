const prefixSum = (sum, n, m) => {
  // 왼->오
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < m; j++) {
      sum[i][j] += sum[i][j - 1];
    }
  }

  // 위->아래
  for (let i = 0; i < m; i++) {
    for (let j = 1; j < n; j++) {
      sum[j][i] += sum[j - 1][i];
    }
  }

  return sum;
};

function solution(board, skill) {
  const [n, m] = [board.length, board[0].length];
  const sum = Array.from(Array(n + 1), () => Array(m + 1).fill(0));
  let answer = 0;

  skill.forEach((skill) => {
    const [type, r1, c1, r2, c2] = skill;
    let degree = type === 1 ? -skill[5] : skill[5];
    sum[r1][c1] += degree;
    sum[r1][c2 + 1] -= degree;
    sum[r2 + 1][c1] -= degree;
    sum[r2 + 1][c2 + 1] += degree;
  });

  prefixSum(sum, n + 1, m + 1);

  board.forEach((line, i) => {
    line.forEach((b, j) => {
      const dur = b + sum[i][j];
      if (dur > 0) {
        answer++;
      }
    });
  });

  return answer;
}

console.log(
  solution(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    [
      [1, 1, 1, 2, 2, 4],
      [1, 0, 0, 1, 1, 2],
      [2, 2, 0, 2, 0, 100],
    ]
  )
);
