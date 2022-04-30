function solution(n, a, b) {
  let answer = 1;
  let first = 0;
  let second = 0;
  if (a > b) {
    first = b;
    second = a;
  } else {
    first = a;
    second = b;
  }

  while (true) {
    if (second - first == 1 && second % 2 == 0 && first % 2 == 1) {
      break;
    }
    console.log(second - first);
    first = parseInt(first / 2) + (first % 2);
    second = parseInt(second / 2) + (second % 2);
    console.log(first, second);
    answer += 1;
  }

  return answer;
}

const n = 8;
const a = 4;
const b = 7;

console.log("answer: ", solution(n, a, b));
