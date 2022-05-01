function solution(absolutes, signs) {
  let answer = 0;

  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i]) {
      answer += absolutes[i];
    } else {
      answer -= absolutes[i];
    }
  }
  return answer;
}

const absolutes = [1, 2, 3];
const signs = [false, false, true];
console.log(solution(absolutes, signs));
