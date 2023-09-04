function solution(x, y, n) {
  let answer = 0;

  if (x === y) {
    return 0;
  }

  const dp = new Array(y + 1).fill(0);

  for (let i = x; i < y + 1; i++) {
    if (i !== x && dp[i] === 0) {
      continue;
    }
    if (i * 2 < y + 1) {
      if (dp[i * 2] === 0) {
        dp[i * 2] = dp[i] + 1;
      } else {
        dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
      }
    }
    if (i * 3 < y + 1) {
      if (dp[i * 3] === 0) {
        dp[i * 3] = dp[i] + 1;
      } else {
        dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
      }
    }
    if (i + n < y + 1) {
      if (dp[i + n] === 0) {
        dp[i + n] = dp[i] + 1;
      } else {
        dp[i + n] = Math.min(dp[i + n], dp[i] + 1);
      }
    }
  }

  if (dp[y] === 0) {
    answer = -1;
  } else {
    answer = dp[y];
  }

  return answer;
}

console.log(solution(1, 1, 1));
