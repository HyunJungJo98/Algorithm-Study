function solution(n, k) {
  const visited = new Array(n + 1).fill(0);
  const answer = [];
  let f = 1;
  let c = n - 1;
  for (let i = 1; i < n; i++) {
    f *= i;
  }

  while (k !== 0) {
    console.log(k, f);
    if (k % f === 0) {
      let num = Math.floor(k / f);

      for (let i = 1; i < n + 1; i++) {
        if (visited[i] === 0) {
          cnt++;
        }
        if (cnt === num) {
          answer.push(i);
          visited[i] = 1;
          break;
        }
      }
    } else {
      const num = Math.floor(k / f) + 1;
      console.log(num, visited);

      let cnt = 0;
      for (let i = 1; i < n + 1; i++) {
        if (visited[i] === 0) {
          cnt++;
        }
        console.log(i, cnt);
        if (cnt === num) {
          answer.push(i);
          visited[i] = 1;
          break;
        }
      }
    }

    k %= f;
    f /= c;
    c--;
  }

  for (let i = n; i > 0; i--) {
    if (visited[i] === 0) {
      answer.push(i);
    }
  }

  return answer;
}

console.log(solution(4, 4));
