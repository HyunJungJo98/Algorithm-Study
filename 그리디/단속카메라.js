function solution(routes) {
  let answer = 1;
  let max = 0;

  routes.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

  max = routes[0][1];

  for (let i = 0; i < routes.length; i++) {
    if (max >= routes[i][0] && max <= routes[i][1]) {
      continue;
    } else {
      max = routes[i][1];
      answer++;
    }
  }

  return answer;
}

console.log(
  solution([
    [-20, -15],
    [-14, -5],
    [-18, -13],
    [-5, -3],
  ])
);
