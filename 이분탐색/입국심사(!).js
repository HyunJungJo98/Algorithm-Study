// function solution(n, times) {
//   let answer = n;

//   const l = times.length;

//   if (l > n) {
//     return times[n - 1];
//   }

//   let current = new Array();
//   times.sort((a, b) => {
//     return a - b;
//   });
//   for (let i = 0; i < l; i++) {
//     current.push([times[i], times[i]]);
//   }

//   n = n - l;
//   idx = 0;
//   while (n >= 0) {
//     const target = current[idx][0] + current[idx][1];
//     const target2 = current[idx][1];

//     let start = 0;
//     let end = current.length - 1;
//     let mid = parseInt((start + end) / 2);

//     while (end - start >= 0) {
//       if (current[mid][0] < target) {
//         start = mid + 1;
//       } else if (current[mid][0] > target) {
//         end = mid - 1;
//       } else {
//         break;
//       }
//       mid = parseInt((start + end) / 2);
//     }

//     current.splice(mid + 1, 0, [target, target2]);
//     n -= 1;
//     idx += 1;
//     console.log(current);
//   }

//   return current[answer - 1][0];
// }

// 접근 방법
// 1. 심사가 걸리는 최대 시간을 구함
// 2. 이분 탐색으로 시간을 줄여가면서(늘려가면서) 그 안에 심사할 수 있는 사람의 수를 구함

// 부족했던 점 : 28분 안에 [7, 10]이 해결하는 사람 수 : 4(28/7) + 2(28/10)라는 것을 찾지 못함

function solution(n, times) {
  times.sort((a, b) => a - b);
  // 최소 걸리는 시간
  let left = 0;
  // 최대 걸리는 시간
  let right = times[times.length - 1] * n;
  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    // mid 시간 안에 심사할 수 있는 사람의 수 구하기
    const cnt = times.reduce(
      (sum, current) => sum + Math.floor(mid / current),
      0
    );

    // 사람의 수가 n보다 크거나 같으면 right를 줄임
    if (cnt >= n) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    mid = Math.floor((left + right) / 2);
    console.log(left, right, mid);
  }

  return left;
}

const n = 6;
const times = [7, 10];
console.log("answer : ", solution(n, times));
