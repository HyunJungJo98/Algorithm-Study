// 시간초과
// function solution(stones, k) {
//   const stack = stones.slice(0, k);
//   let answer = Math.max(...stack);

//   for (let i = 1; i <= stones.length - k; i++) {
//     const newMax = Math.max(...stones.slice(i, i + k));
//     answer = answer > newMax ? newMax : answer;
//   }

//   return answer;
// }

// 어떤 수 n을 빼서 음수가 k번 연속되면 n이 정답
// n을 이분탐색으로 찾기
function solution(stones, k) {
  let left = 1;
  let right = 200000000;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let count = 0;
    for (let i = 0; i < stones.length; i++) {
      if (stones[i] - mid <= 0) {
        count++;
      } else {
        count = 0;
      }
      if (count === k) {
        break;
      }
    }
    // 음수가 연속으로 k번 음수가 나왔다는 뜻
    if (count === k) {
      right = mid - 1;
    } else {
      // 음수가 연속으로 k번까진 안 나왔다는 뜻 -> 더 높아도 됨
      left = mid + 1;
    }
  }

  return left;
}

console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3));
