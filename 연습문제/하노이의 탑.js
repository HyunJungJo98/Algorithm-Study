function solution_(n, from, to, other) {
  if (n === 1) {
    return [[from, to]];
  }

  let answer = [];
  // n-1까지의 원반을 2번(other)으로 옮김
  answer = answer.concat(solution_(n - 1, from, other, to));
  // n 크기의 원반을 3번(to)으로 옮김
  answer.push([from, to]);
  // n-1까지의 원반이 현재 other에 있으므로
  // other에서 to로 옮겨줌
  answer = answer.concat(solution_(n - 1, other, to, from));

  return answer;
}

function solution(n) {
  return solution_(n, 1, 3, 2);
}

console.log(solution(3));
