const fs = require('fs');
const input = fs
  .readFileSync('./단기간 성장/10830input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, b] = input[0].split(' ').map(Number);
const matrix = input.slice(1).map((line) => line.split(' ').map(Number));

const multiMax = (arr1, arr2) => {
  const result = Array.from(Array(n), () => Array(n).fill(0));

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      let sum = 0;
      for (let i = 0; i < n; i++) {
        sum += arr1[row][i] * arr2[i][col];
      }
      result[row][col] = sum % 1000;
    }
  }

  return result;
};

const power = (k, arr) => {
  if (k === 1) {
    return arr;
  }
  if (k % 2 === 0) {
    const half = power(k / 2, arr);
    return multiMax(half, half);
  }
  return multiMax(arr, power(k - 1, arr));
};

const answer = power(b, matrix);
answer.forEach((line) => console.log(line.map((num) => num % 1000).join(' ')));
