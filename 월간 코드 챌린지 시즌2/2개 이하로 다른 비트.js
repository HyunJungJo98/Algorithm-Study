function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length; i++) {
    let start = numbers[i] + 1;
    while (true) {
      let num = numbers[i].toString(2);
      const a = start.toString(2);
      if (a.length > num.length) {
        const l = a.length - num.length;
        num = "0".repeat(l) + num;
      }
      result = 0;
      for (let j = 0; j < a.length; j++) {
        if (a[j] !== num[j]) {
          result += 1;
        }
      }
      if (result < 3) {
        answer.push(start);
        break;
      }
      start += 1;
    }
  }
  return answer;
}

numbers = [2, 7];
console.log(solution(numbers));
