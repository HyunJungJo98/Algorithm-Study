const targets = [
  [4, 5],
  [4, 8],
  [10, 14],
  [11, 13],
  [5, 12],
  [3, 7],
  [1, 4],
];

function solution(targets) {
  let answer = 0,
    prev = -1;

  targets.sort((a, b) => a[1] - b[1]);

  targets.forEach((t) => {
    const [s, e] = t;
    if (prev <= s) {
      prev = e;
      answer += 1;
    }
  });

  return answer;
}

console.log(solution(targets));
