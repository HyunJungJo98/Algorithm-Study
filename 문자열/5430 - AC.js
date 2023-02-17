const fs = require('fs');
const input = fs
  .readFileSync('./문자열/5430input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const t = +input[0];

const arrayToString = (arr) => {
  let s = '[';
  s += arr.join(',');
  s += ']';
  return s;
};

const slice = (r, left, right, arr) => {
  if (left - right >= 2) {
    return 'error';
  }
  const newArr = arr.slice(left, right + 1);
  if (!r) {
    return arrayToString(newArr);
  }
  return arrayToString(newArr.reverse());
};

const ac = (p, n, arr) => {
  let r = false;
  let left = 0;
  let right = n - 1;
  for (let i = 0; i < p.length; i++) {
    if (p[i] === 'R') {
      r = !r;
      continue;
    }
    if (!r && p[i] === 'D') {
      left++;
      continue;
    }
    right--;
  }
  console.log(slice(r, left, right, arr));
};

for (let i = 0; i < t; i++) {
  const p = input[i * 3 + 1];
  const n = +input[i * 3 + 2];
  const arr = input[i * 3 + 3].slice(1, -1).split(',').map(Number);
  ac(p, n, arr);
}
