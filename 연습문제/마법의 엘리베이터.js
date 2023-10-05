function solution(storey) {
  let answer = 0;
  let expo = storey.toString().length - 1;
  let n = storey;

  if (n > 5 && n < 10) {
    return 10 - n + 1;
  }

  while (n !== 0) {
    n = Math.abs(n);
    let button = 10 ** expo;
    let num = 0;

    const quo = Math.floor(n / button);
    const rem = n % button;
    if (rem > button / 2) {
      num = quo + 1;
    } else {
      num = quo;
    }

    n -= num * button;
    expo--;
    answer += num;
    console.log(n);
  }
  return answer;
}

console.log(solution(646));
