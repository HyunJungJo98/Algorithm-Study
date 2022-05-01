function solution(people, limit) {
  let answer = 0;

  people.sort((a, b) => a - b);

  let stack = [];
  let sum = 0;
  while (people.length != 0) {
    if (sum === limit) {
      sum = 0;
      stack = [];
      answer += 1;
      continue;
    } else if (sum > limit) {
      sum = stack[stack[stack.length - 1]];
      stack = [stack[stack.length - 1]];
      answer += 1;
    }
    const cur = people.shift();
    console.log(cur);
    stack.push(cur);
    sum += cur;
    console.log(stack, sum);
  }

  console.log(stack);

  if (stack.length != 0) {
    answer += 2;
  }

  return answer;
}

const people = [70, 80, 50];
const limit = 100;

console.log(solution(people, limit));
