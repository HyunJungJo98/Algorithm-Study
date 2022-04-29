const prim = (num) => {
  if (num === 1) {
    return 1;
  }
  cnt = 2;
  for (let i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      cnt += 1;
    }
  }
  return cnt;
};

function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    if (prim(i) % 2 === 0) {
      answer += i;
    } else {
      answer -= i;
      console.log(answer, i);
    }
  }
  return answer;
}

left = 1;
right = 1;
console.log(solution(left, right));
