const findMin = (arr) => {
  let min = 100000000;
  arr.forEach((a) => {
    min = a < min ? a : min;
  });
  return min;
};

function solution(arrayA, arrayB) {
  //Math.min의 경우 인자의 개수가 많이 커질 경우(ex, 1,000,000개 넣어서 찾을 경우) 'Maximum call stack size exceeded' 오류가 발생합니다.
  let minA = findMin(arrayA);
  let minB = findMin(arrayB);

  while (minA !== 0) {
    let flag = 0;
    for (let i = 0; i < arrayA.length; i++) {
      if (arrayA[i] % minA !== 0 || arrayB[i] % minA === 0) {
        flag = 1;
        break;
      }
    }
    if (flag) {
      minA -= 1;
    } else {
      break;
    }
  }

  while (minB !== 0) {
    let flag = 0;
    for (let i = 0; i < arrayA.length; i++) {
      if (arrayB[i] % minB !== 0 || arrayA[i] % minB === 0) {
        flag = 1;
        break;
      }
    }
    if (flag) {
      minB -= 1;
    } else {
      break;
    }
  }

  return Math.max(minA, minB);
}

console.log(solution([14, 35, 119], [18, 30, 102]));
