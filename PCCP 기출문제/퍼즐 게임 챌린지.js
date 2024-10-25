const getTime = (level, diffs, times, l) => {
  let result = times[0];
  for (let i = 1; i < l; i++) {
    if (diffs[i] > level) {
      result += (diffs[i] - level) * (times[i] + times[i - 1]) + times[i];
    } else {
      result += times[i];
    }
  }

  return result;
};

function solution(diffs, times, limit) {
  const l = diffs.length;
  let [left, right] = [1, 1];
  let answer = Infinity;

  diffs.forEach((v) => {
    if (v > right) {
      right = v;
    }
  });

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const time = getTime(mid, diffs, times, l);

    if (time > limit) {
      left = mid + 1;
    } else {
      answer = Math.min(answer, mid);
      right = mid - 1;
    }
  }

  return answer;
}

diffs = [1, 328, 467, 209, 54];
times = [2, 7, 1, 4, 3];
limit = 1723;

console.log(solution(diffs, times, limit));
