function solution(k, d) {
  let answer = 0;
  for (let i = 0; i < d + 1; i += k) {
    answer += Math.floor(Math.floor(Math.sqrt(d ** 2 - i ** 2)) / k) + 1;
  }
  return answer;
}

console.log(solution(2, 4));
