const fs = require('fs');
const input = fs
  .readFileSync('./누적 합/21758input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const honey = input[1].split(' ').map(Number);
const sum = [0];

honey.reduce((prev, curr) => {
  sum.push(prev + curr);
  return (prev += curr);
}, 0);

let answer = 0;
let [left, right] = [0, n - 1];

for (let mid = 1; mid < n - 1; mid++) {
  // left가 벌통일 때
  answer = Math.max(answer, sum[mid] - sum[0] + sum[right] - honey[mid]);
  // mid가 벌통일 때
  answer = Math.max(
    answer,
    sum[mid + 1] - sum[left + 1] + sum[right] - sum[mid]
  );
  // right가 벌통일 때
  answer = Math.max(
    answer,
    sum[right + 1] - sum[1] - honey[mid] + sum[right + 1] - sum[mid + 1]
  );
}

console.log(answer);
