function solution(plans) {
  let answer = [];
  const newPlans = plans
    .map(([name, start, paytime]) => {
      const [hour, min] = start.split(':').map(Number);
      return [name, hour * 60 + min, +paytime];
    })
    .sort((a, b) => a[1] - b[1]);

  const l = plans.length;
  const stack = [];

  let curTime = newPlans[0][1];
  let nextIndex = 1;

  for (let i = 0; i < l; i++) {
    const [name, start, paytime] = newPlans[i];

    if (nextIndex === l) {
      answer.push(name);
      curTime = start + paytime;
      break;
    }

    const nextStart = newPlans[nextIndex][1];
    if (start + paytime > nextStart) {
      stack.push([name, paytime - (nextStart - start)]);
      curTime = nextStart;
    } else {
      answer.push(name);
      curTime = start + paytime;
      if (curTime < nextStart && stack.length !== 0) {
        while (curTime < nextStart && stack.length !== 0) {
          const [stackName, stackPaytime] = stack.pop();

          if (curTime + stackPaytime > nextStart) {
            stack.push([stackName, stackPaytime - (nextStart - curTime)]);
          } else {
            answer.push(stackName);
          }
          curTime += stackPaytime;
        }
      }
    }

    nextIndex++;
  }

  const stackL = stack.length;
  stack.forEach((_, i) => {
    answer.push(stack[stackL - i - 1][0]);
  });

  return answer;
}

console.log(
  solution([
    ['A', '12:00', '30'],
    ['B', '12:10', '20'],
    ['C', '15:00', '40'],
    ['D', '15:10', '30'],
  ])
);
