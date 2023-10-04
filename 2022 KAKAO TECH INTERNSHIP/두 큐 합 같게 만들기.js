const q1 = [101, 100];
const q2 = [102, 103];

const isBreak = (sum1, sum2, l1, l2) => {
  if (sum1 > sum2 && l1 === 1) {
    return true;
  }
  if (sum1 < sum2 && l2 === 1) {
    return true;
  }
  return false;
};

function solution(queue1, queue2) {
  let answer = 0;
  let sum1 = queue1.reduce((prev, cur) => (prev += cur), 0);
  let sum2 = queue2.reduce((prev, cur) => (prev += cur), 0);

  if ((sum1 + sum2) % 2 === 1) {
    return -1;
  }

  const l = queue1.length;
  let index1 = 0;
  let index2 = 0;
  let l1 = queue1.length;
  let l2 = queue2.length;

  while (sum1 !== sum2) {
    if (isBreak(sum1, sum2, l1, l2)) {
      answer = -1;
      break;
    }
    // if (index1 > l * 2 && index2 > l * 2) {
    //   answer = -1;
    //   break;
    // }
    if (sum1 > sum2) {
      queue2.push(queue1[index1]);
      sum1 -= queue1[index1];
      sum2 += queue1[index1];
      index1++;
      l1--;
      l2++;
    } else {
      queue1.push(queue2[index2]);
      sum1 += queue2[index2];
      sum2 -= queue2[index2];
      index2++;
      l2--;
      l1++;
    }
    answer++;
  }

  return answer;
}

console.log(solution(q1, q2));
