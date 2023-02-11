const fs = require('fs');
const { exit } = require('process');
const input = fs
  .readFileSync('./구현/16918input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const [r, c, n] = input[0].split(' ').map(Number);

if (n % 2 === 0) {
  const result = Array.from(Array(r), () => Array(c).fill('O'));
  result.map((line) => console.log(line.join('')));
  exit(0);
}

if (n % 4 === 1) {
  input.slice(1).map((line) => console.log(line));
  exit(0);
}

const dx = [1, -1, 0, 0];
const dy = [0, 0, -1, 1];

const makeArray = (arr, i, j) => {
  arr[i][j] = '.';
  dx.map((x, index) => {
    const nx = x + j;
    const ny = dy[index] + i;
    if (ny >= 0 && ny < r && nx >= 0 && nx < c) {
      arr[ny][nx] = '.';
    }
  });
};

if (n % 4 === 3) {
  const result = Array.from(Array(r), () => Array(c).fill('O'));
  input.slice(1).map((line, i) => {
    Array.from(line).map((s, j) => {
      if (s === 'O') {
        makeArray(result, i, j);
      }
    });
  });
  result.map((line) => {
    console.log(line.join(''));
  });
}
