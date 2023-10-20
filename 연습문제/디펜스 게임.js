function solution(n, k, enemy) {
  if (enemy.length <= k) {
    return enemy.length;
  }

  // 어디까지 자를지를 이분 탐색으로 찾기
  let [left, right] = [0, enemy.length];
  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    // mid까지 잘라서 오름차순으로 정렬
    const range = enemy.slice(0, mid).sort((a, b) => b - a);

    let invin = k;
    const deal = range.reduce((pre, cur) => {
      // 무적권이 남아있으면 무조건 쓰기
      if (invin > 0) {
        invin--;
        return pre;
      }
      // 없으면 상대해야 할 적 수를 계속 더하기
      return pre + cur;
    }, 0);

    // 상대해야 할 적이 n보다 작거나 같으면
    // 더 많은 라운드를 갈 수 있다는 뜻이므로 left 이동
    if (n >= deal) {
      left = mid + 1;
    } else {
      // 상대해야 할 적이 n보다 많으므로 right 이동
      right = mid - 1;
    }
    mid = Math.floor((left + right) / 2);
  }

  return left - 1;
}

console.log(solution(7, 3, [4, 2, 4, 5, 3, 3, 1]));
