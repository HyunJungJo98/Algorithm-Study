const fs = require('fs');
const input = fs
  .readFileSync('./대기업 코테에서 나오는 유형 모음/2607input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const target = input[1];
const dict = {};
let answer = 0;

for (let i = 0; i < target.length; i++) {
  if (dict[target[i]]) {
    dict[target[i]] += 1;
  } else {
    dict[target[i]] = 1;
  }
}

const makeDict = (word) => {
  const dict = {};
  for (let i = 0; i < word.length; i++) {
    if (dict[word[i]]) {
      dict[word[i]] += 1;
    } else {
      dict[word[i]] = 1;
    }
  }
  return dict;
};

const getDiff = (dict, wordDict) => {
  let cnt = 0;
  for (let i = 0; i < 26; i++) {
    const alpha = String.fromCharCode(65 + i);
    if (dict[alpha] && wordDict[alpha]) {
      cnt += Math.abs(dict[alpha] - wordDict[alpha]);
    } else if (dict[alpha]) {
      cnt += dict[alpha];
    } else if (wordDict[alpha]) {
      cnt += wordDict[alpha];
    }
  }
  return cnt;
};

for (let i = 2; i < n + 1; i++) {
  const word = input[i];
  const wordDict = makeDict(word);

  if (word.length === target.length && getDiff(dict, wordDict) <= 2) {
    answer++;
  } else if (
    word.length === target.length - 1 &&
    getDiff(dict, wordDict) <= 1
  ) {
    answer++;
  } else if (
    word.length === target.length + 1 &&
    getDiff(dict, wordDict) <= 1
  ) {
    answer++;
  }
}

console.log(answer);
