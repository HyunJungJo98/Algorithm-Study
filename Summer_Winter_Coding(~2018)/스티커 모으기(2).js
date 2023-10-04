function solution(sticker) {
  const s = [];
  const s2 = [];
  const dp = [];
  const dp2 = [];
  const l = sticker.length;

  if (l <= 3) {
    return Math.max(...sticker);
  }

  for (let i = 0; i < l - 1; i++) {
    s.push(sticker[i]);
    s2.push(sticker[i + 1]);
  }
  s.push(0);
  s2.push(0);

  dp[0] = s[0];
  dp[1] = Math.max(dp[0], s[1]);

  dp2[0] = s2[0];
  dp2[1] = Math.max(dp2[0], s2[1]);

  for (let i = 2; i < l; i++) {
    dp.push(Math.max(dp[i - 2] + s[i], dp[i - 1]));
    dp2.push(Math.max(dp2[i - 2] + s2[i], dp2[i - 1]));
  }
  return Math.max(dp[l - 1], dp2[l - 1]);
}

console.log(solution([14, 6, 5, 11, 3, 9, 2, 10]));

// const l = sticker.length;
// if (l <= 3) {
//   return Math.max(...sticker);
// }

// const standard = [];
// const dp = [];
// const flag = [1, 1, 1];

// for (let i = 0; i < 3; i++) {
//   dp.push([sticker[i], i]);
//   standard.push([sticker[i], i]);
// }

// while (true) {
//   for (let i = 0; i < 3; i++) {
//     const index = dp[i][1];
//     const sum = dp[i][0];
//     if (
//       (index + 2) % l === standard[i % 3][1] ||
//       (index + 3) % l === standard[i % 3][1]
//     ) {
//       flag[standard[i % 3][1]] = 0;
//       continue;
//     }
//     if ((index + 4) % l === standard[i % 3][1]) {
//       dp[i][0] = sum + sticker[(index + 2) % l];
//       dp[i][1] = (index + 2) % l;
//       continue;
//     }
//     if (sticker[(index + 2) % l] > sticker[(index + 3) % l]) {
//       dp[i][0] = sum + sticker[(index + 2) % l];
//       dp[i][1] = (index + 2) % l;
//     } else {
//       dp[i][0] = sum + sticker[(index + 3) % l];
//       dp[i][1] = (index + 3) % l;
//     }
//   }
//   if (
//     flag.every((f) => {
//       if (f === 0) return true;
//     })
//   ) {
//     break;
//   }
// }

// dp.sort((a, b) => b[0] - a[0]);

// return dp[0][0];
