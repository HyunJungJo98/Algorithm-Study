const fs = require('fs');
const input = fs
  .readFileSync('./문자열/6443input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const strings = input.slice(1);
const dict = {};

const backTracking = (string, dict, s, l) => {
  if (s.length === l) {
    console.log(s.join(''));
    return;
  }

  for (key of string) {
    if (dict[key] !== 0) {
      dict[key] -= 1;
      s.push(key);
      backTracking(string, dict, s, l);
      s.pop();
      dict[key] += 1;
    }
  }
};

strings.forEach((string) => {
  const arrString = Array.from(string).sort();
  const dict = {};

  arrString.forEach((s) => {
    if (dict[s]) {
      dict[s] += 1;
    } else {
      dict[s] = 1;
    }
  });

  console.log(dict);

  backTracking(Object.keys(dict), dict, [], arrString.length);
});
