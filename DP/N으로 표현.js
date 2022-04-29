function solution(N, number) {
  // N이 1개인 경우, 2개인 경우 ...
  const use = Array.from(new Array(9), () => new Set());
  let answer = 0;

  if (N === number) {
    return 1;
  }

  use.forEach((item, index) => {
    if (index != 0) {
      // 초기화
      // index개만큼 반복해서 붙인 숫자를 넣어줌
      // 5, 55, 555, 5555 ...
      item.add(Number(String(N).repeat(index)));
    }
  });

  for (let i = 0; i <= 8; i++) {
    for (let j = 0; j < i; j++) {
      for (let item1 of use[j]) {
        for (let item2 of use[i - j]) {
          use[i].add(item1 + item2);
          use[i].add(item1 - item2);
          use[i].add(item1 / item2);
          use[i].add(item1 * item2);
        }
      }
    }
    if (use[i].has(number)) {
      return i;
    }
  }
  return -1;
}

const N = 5;
const number = 12;

console.log(solution(N, number));
