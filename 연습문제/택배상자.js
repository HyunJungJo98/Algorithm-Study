function solution(order) {
  const stack = [];
  let answer = 0;
  let index = 0;
  let num = 1;
  let n = order.length;

  for (let i = 0; i < n; i++) {
    if (stack && stack[stack.length - 1] === order[index]) {
      stack.pop();
      answer++;
      index++;
      continue;
    }
    while (order[index] !== num && num <= n) {
      stack.push(num);
      num++;
    }
    if (order[index] === num) {
      answer++;
      index++;
      num++;
    }
  }

  return answer;
}

console.log(solution([5, 4, 3, 2, 1]));
