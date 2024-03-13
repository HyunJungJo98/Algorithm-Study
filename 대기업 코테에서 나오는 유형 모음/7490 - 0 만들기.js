const fs = require('fs');
const input = fs
  .readFileSync('./대기업 코테에서 나오는 유형 모음/7490input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const t = +input[0];
const nums = input.slice(1).map(Number);
const op = ['+', '-', ' '];
const l = op.length;

const makeArr = (num) => {
  return Array(num * 2 - 1)
    .fill(0)
    .map((_, i) => {
      if (i % 2 === 0) {
        if (i === 0) {
          return 1;
        }
        return i / 2 + 1;
      }
      return 0;
    });
};

const calculate = (string) => {
  const numString = string.replaceAll(' ', '');
  const result = eval(numString);
  return result === 0 ? numString : false;
};

const dfs = (numArr, num, dep, answers) => {
  if (dep === num - 1) {
    const string = numArr.join('');
    const numString = calculate(string);
    if (numString) {
      answers.push(string);
    }
    return;
  }

  for (let i = 0; i < l; i++) {
    numArr[dep * 2 + 1] = op[i];
    dfs(numArr, num, dep + 1, answers);
    numArr[dep * 2 + 1] = 0;
  }
};

for (let i = 0; i < t; i++) {
  const num = nums[i];
  const arr = makeArr(num);
  const answers = [];

  dfs(arr, num, 0, answers);

  answers.sort().forEach((answer) => console.log(answer));
  if (i !== t - 1) {
    console.log();
  }
}
