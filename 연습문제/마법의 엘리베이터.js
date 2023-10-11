function solution(storey) {
  let answer = 0;
  const sArr = storey.toString().split('').map(Number).reverse();
  let index = 0;

  while (index !== sArr.length) {
    if (sArr[index] < 5) {
      answer += sArr[index];
    } else if (sArr[index] > 5) {
      answer += 10 - sArr[index];
      if (index === sArr.length - 1) {
        sArr.push(1);
      } else {
        sArr[index + 1]++;
      }
    } else {
      answer += 5;
      if (index !== sArr.length - 1 && sArr[index + 1] >= 5) {
        sArr[index + 1]++;
      }
    }

    index++;
  }

  return answer;
}

console.log(solution(9));
