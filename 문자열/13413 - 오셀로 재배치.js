const fs = require('fs');
const input = fs
  .readFileSync('./문자열/13413input.txt')
  .toString()
  .trim()
  .split('\r\n');

// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const t = Number(input[0]);

const getCnt = (n, o1, o2) => {
  const answer = [];
  for (let i = 0; i < n; i++) {
    if (o1[i] !== o2[i]) {
      answer.push(o1[i]);
    }
  }
  const b_cnt = answer.filter((s) => s === 'B').length;
  const w_cnt = answer.filter((s) => s === 'W').length;
  return Math.abs(b_cnt - w_cnt) + Math.min(b_cnt, w_cnt);
};

for (let i = 0; i < t; i++) {
  const test = 3 * i + 1;
  const n = Number(input[test]);
  const o1 = input[test + 1];
  const o2 = input[test + 2];
  console.log(getCnt(n, o1, o2));
}
