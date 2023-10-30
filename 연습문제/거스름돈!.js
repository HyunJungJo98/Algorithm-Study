function solution(n, money) {
  const dp = Array.from(Array(n + 1), () => 0);
  dp[0] = 1;

  for (const currency of money) {
    for (let i = currency; i <= n; i++) {
      dp[i] += dp[i - currency];
    }
  }

  return dp[n];
}

console.log(solution(5, [1, 2, 5]));
