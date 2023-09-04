function solution(A, B) {
  let answer = 0;
  const n = A.length;
  const a = A.sort((a, b) => b - a);
  const b = B.sort((a, b) => b - a);

  for (let i = 0; i < n; i++) {
    if (a[i] < b[i]) {
      answer += 1;
    }
  }
  return answer;
}

console.log(solution([5, 1, 3, 7], [2, 2, 6, 8]));
