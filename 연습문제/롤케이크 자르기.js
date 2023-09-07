const topping = [1, 2, 1, 3, 1, 4, 1, 2];

function solution(topping) {
  let answer = 0;
  const before = {};
  const after = {};
  let beforeLen = 1;
  let afterLen = 0;

  for (let i = 0; i < topping.length; i++) {
    if (i < 1) {
      before[topping[i]] = 1;
    } else {
      if (after[topping[i]]) {
        after[topping[i]]++;
      } else {
        after[topping[i]] = 1;
        afterLen++;
      }
    }
  }

  for (let i = 1; i < topping.length - 1; i++) {
    if (beforeLen === afterLen) {
      answer++;
    }
    if (before[topping[i]]) {
      before[topping[i]] += 1;
    } else {
      before[topping[i]] = 1;
      beforeLen += 1;
    }
    after[topping[i]] -= 1;
    if (after[topping[i]] === 0) {
      delete after[topping[i]];
      afterLen -= 1;
    }
  }

  return answer;
}

console.log(solution(topping));
