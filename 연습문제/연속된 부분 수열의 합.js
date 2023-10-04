const sequence = [2, 2, 2, 2, 2];
const k = 6;

function solution(sequence, k) {
  let answer = [0, 1000000];
  let sum = sequence[sequence.length - 1];
  let left = sequence.length - 1;
  let right = sequence.length - 1;

  while (left >= 0 && right >= 0) {
    // console.log(left, right, sum);
    if (sum === k) {
      //   console.log('같음');
      if (right - left <= answer[1] - answer[0]) {
        answer = [left, right];
        // console.log('바꿈');
      }
      left--;
      sum += sequence[left];
      continue;
    }
    if (sum < k) {
      left--;
      sum += sequence[left];
    } else {
      sum -= sequence[right];
      right--;
    }
  }

  return answer;
}

console.log(solution(sequence, k));
