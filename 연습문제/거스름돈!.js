function solution(n, money) {
  let answer = 0;
  const dp = Array.from(Array(n + 1), () => 0);
  dp[0] = 1;

  for (const currency of money) {
    for (let i = currency; i <= n; i++) {
      dp[i] += dp[i - currency];
    }
    console.log(dp);
  }

  return answer;
}

console.log(solution(5, [1, 2, 5]));
