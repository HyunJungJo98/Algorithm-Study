const fs = require('fs');
const input = fs
  .readFileSync('./문자열/2800input.txt')
  .toString()
  .trim()
  .split('\r\n')[0];
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')[0];

const stack = [];
const pair = [];
const strings = [];

Array.from(input).map((s, idx) => {
  if (s === '(') {
    stack.push([idx, '(']);
    strings.push('');
    return;
  }
  if (s === ')' && stack.length !== 0 && stack[stack.length - 1][1] === '(') {
    const p = stack.pop();
    pair.push([p[0], idx]);
    strings.push('');
    return;
  }
  strings.push(s);
});

const pairCnt = pair.length;
const result = new Set();

const dfs = (l, start) => {
  if (l === start) {
    let string = '';
    strings.map((s) => {
      if (string !== '') {
        string += s;
      }
    });
    result.add(string);
    // result.add(strings.join(''));
    return;
  }
  for (let i = start; i < pairCnt; i++) {
    const left = pair[i][0];
    const right = pair[i][1];
    strings[left] = '(';
    strings[right] = ')';
    dfs(l, start + 1);
    strings[left] = '';
    strings[right] = '';
  }
};

for (let i = 0; i < pairCnt + 1; i++) {
  dfs(i, 0);
  //   console.log(result);
}

result.delete(input);

const answer = Array.from(result).sort((prev, cur) => cur - prev);
for (let i = answer.length - 1; i > -1; i--) {
  console.log(answer[i]);
}
