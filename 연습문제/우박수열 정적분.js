function solution(k, ranges) {
  let answer = [];
  const numbers = [];
  const areas = [];

  let num = k;
  let n = 0;
  numbers.push(k);
  while (num > 1) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }
    numbers.push(num);
    n++;
  }

  areas.push(0);
  areas.push((numbers[0] + numbers[1]) * 0.5);
  for (let i = 2; i < n + 1; i++) {
    areas.push((numbers[i] + numbers[i - 1]) * 0.5 + areas[i - 1]);
  }

  answer = ranges.map((range) => {
    const [a, b] = [range[0], n + range[1]];
    if (a > b) {
      return -1;
    }
    if (a === b) {
      return 0;
    }
    return areas[b] - areas[a];
  });

  return answer;
}

console.log(
  solution(3, [
    [0, 0],
    [1, -2],
    [3, -3],
  ])
);
