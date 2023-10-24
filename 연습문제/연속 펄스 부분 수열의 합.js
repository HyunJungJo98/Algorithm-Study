function solution(sequence) {
  let answer = 0;
  const plus = sequence.map((s, i) => {
    if (i % 2 === 1) {
      return s;
    }
    return -s;
  });
  const minus = sequence.map((s, i) => {
    if (i % 2 === 1) {
      return -s;
    }
    return s;
  });

  let dp1 = plus[0];
  let dp2 = minus[0];
  answer = Math.max(dp1, dp2);

  for (let i = 1; i < sequence.length; i++) {
    // 곱해서 다 음수가 되더라도 반대로 곱하면 되므로
    // 답은 무조건 양수, 즉 음수가 될 때 바로 초기화해주면 됨
    dp1 = dp1 < 0 ? 0 : dp1;
    dp2 = dp2 < 0 ? 0 : dp2;

    dp1 = dp1 + plus[i];
    dp2 = dp2 + minus[i];

    answer = Math.max(answer, dp1, dp2);
  }
  return answer;
}

console.log(solution([-5]));
