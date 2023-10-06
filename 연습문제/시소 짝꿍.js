function solution(weights) {
  let answer = 0;
  const dict = {};
  for (let i = 0; i < weights.length; i++) {
    if (dict[weights[i]]) {
      dict[weights[i]] += 1;
    } else {
      dict[weights[i]] = 1;
    }
  }

  for (let i = 0; i < weights.length; i++) {
    console.log(dict);
    if (dict[weights[i]] > 1) {
      answer += dict[weights[i]] - 1;
    }
    if (dict[weights[i] * 2] > 0) {
      answer += dict[weights[i] * 2];
    }
    if (dict[weights[i] * (1 / 2)] > 0) {
      answer += dict[weights[i] * (1 / 2)];
    }
    if (dict[weights[i] * (3 / 4)] > 0) {
      answer += dict[weights[i] * (3 / 4)];
    }
    if (dict[weights[i] * (4 / 3)] > 0) {
      answer += dict[weights[i] * (4 / 3)];
    }
    if (dict[weights[i] * (2 / 3)] > 0) {
      answer += dict[weights[i] * (2 / 3)];
    }
    if (dict[weights[i] * (3 / 2)] > 0) {
      answer += dict[weights[i] * (3 / 2)];
    }

    dict[weights[i]] -= 1;
  }

  return answer;
}

console.log(solution([10, 50]));
