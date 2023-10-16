function solution(s) {
  for (let len = s.length; len > 1; len--) {
    for (let left = 0; left < s.length - len + 1; left++) {
      let mid = left + Math.ceil(len / 2) - (len % 2);
      let right = 2 * left + len - 1;
      let flag = 0;

      console.log(len, left, mid, right);

      for (let i = left; i < mid; i++) {
        if (s[i] !== s[right - i]) {
          flag = 1;
          break;
        }
      }
      if (!flag) {
        return len;
      }
    }
  }

  return 1;
}

console.log(solution('abbal'));
