function solution(n, stations, w) {
  let answer = 0;
  let start = 1;
  const l = stations.length;

  for (let i = 0; i < l; i++) {
    answer += Math.ceil((stations[i] - w - start) / (w * 2 + 1));
    start = stations[i] + w + 1;
  }

  if (start <= n) {
    answer += Math.ceil((n - stations[l - 1] - w) / (w * 2 + 1));
  }

  return answer;
}

console.log(solution(5, [3], 1));
