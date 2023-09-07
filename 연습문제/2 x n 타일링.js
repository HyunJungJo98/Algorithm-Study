function solution(n) {
  const dp = [0, 1, 2];
  const C = 1000000007;
  for (let i = 2; i < n; i++) {
    dp.push((dp[i] + dp[i - 1]) % C);
  }
  return dp[n] % C;
}

console.log(solution(60000));
