const fs = require('fs');
const input = fs
  .readFileSync('./문자열/6443input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
let dict = {};
const s = [];

const backTracking = (l, string) => {
  if (s.length === l) {
    console.log(s.join(''));
    return;
  }

  for (let i = 0; i < string.length; i++) {
    const key = string[i];
    if (dict[key] !== 0) {
      dict[key] -= 1;
      s.push(key);
      backTracking(l, string);
      s.pop();
      dict[key] += 1;
    }
  }
};

for (let i = 1; i < input.length; i++) {
  const string = input[i];
  const arrString = Array.from(string).sort();

  dict = {};

  arrString.forEach((s) => {
    if (dict[s]) {
      dict[s] += 1;
    } else {
      dict[s] = 1;
    }
  });

  backTracking(arrString.length, Object.keys(dict));
}
