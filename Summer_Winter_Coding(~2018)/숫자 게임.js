function solution(A, B) {
  const n = A.length;
  const a = A.sort((a, b) => a - b);
  const b = B.sort((a, b) => a - b);
  let index = 0;

  for (let i = 0; i < n && index < n; i++) {
    if (a[index] < b[i]) {
      index++;
    }
  }

  return index;
}

console.log(solution([5, 1, 3, 7], [2, 2, 6, 8]));
