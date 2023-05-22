const fs = require('fs');
const input = fs
  .readFileSync('./문자열/20437input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const t = +input[0];

const makeDict = (s) => {
  const dict = {};
  s.split('').forEach((char, index) => {
    if (dict[char]) {
      dict[char].push(index);
    } else {
      dict[char] = [index];
    }
  });
  return dict;
};

const findLongerThanKAl = (k, dict) => {
  return Object.keys(dict).filter((key) => dict[key].length >= k);
};

const findLength = (dict, keys, k) => {
  let shorter = 10000;
  let longer = 0;
  keys.forEach((key) => {
    let start = 0;
    let end = k - 1;
    while (end !== dict[key].length) {
      const l = dict[key][end] - dict[key][start] + 1;
      if (l < shorter) {
        shorter = l;
      }
      if (l > longer) {
        longer = l;
      }
      start++;
      end++;
    }
  });
  console.log(shorter, longer);
};

for (let i = 1; i < input.length - 1; i = i + 2) {
  const s = input[i];
  const k = +input[i + 1];
  const dict = makeDict(s);
  const keys = findLongerThanKAl(k, dict);
  if (keys.length === 0) {
    console.log(-1);
    continue;
  }
  findLength(dict, keys, k);
}
