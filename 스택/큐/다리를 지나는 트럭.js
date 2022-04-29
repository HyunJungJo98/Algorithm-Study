function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let stack = [];
  let complete = [];

  const truck_num = truck_weights.length;

  let result = 0;
  while (complete.length !== truck_num) {
    const current = truck_weights.shift();

    if (stack.length === bridge_length) {
      const a = stack.shift();
      if (a !== 0) {
        complete.push(a);
      }
    }

    const sum = stack.reduce((x, y) => {
      return x + y;
    }, 0);

    if (sum + current > weight) {
      stack.push(0);
      truck_weights.unshift(current);
    } else {
      stack.push(current);
    }
    result += 1;
  }
  return result;
}

const bridge_length = 100;
const weight = 100;
const truck_weights = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

console.log(solution(bridge_length, weight, truck_weights));
