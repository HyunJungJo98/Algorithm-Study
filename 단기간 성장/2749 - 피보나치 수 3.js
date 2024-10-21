const fs = require('fs');
const input = fs
  .readFileSync('./단기간 성장/2749input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const f = [
  [1, 1],
  [1, 0],
];

if (n < 2) {
  console.log(n);
  process.exit(0);
}
2384;

const multi = (arr1, arr2, n, m) => {
  const result = Array.from(Array(n), () => Array(m).fill(0));

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < m; col++) {
      let sum = 0;
      for (let i = 0; i < n; i++) {
        sum += arr1[row][i] * arr2[i][col];
        sum %= 1000000;
      }
      result[row][col] = sum % 1000000;
    }
  }

  return result;
};

const power = (n, arr) => {
  if (n === 1) {
    return arr;
  }
  if (n % 2 === 0) {
    const half = power(n / 2, arr);
    return multi(half, half, 2, 2);
  }
  return multi(arr, power(n - 1, arr), 2, 2);
};

const result = power(n - 1, f);
const answer = multi(result, [[1], [0]], 2, 1);
console.log(answer[0][0] % 1000000);
