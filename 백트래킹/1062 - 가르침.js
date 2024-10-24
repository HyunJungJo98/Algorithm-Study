const fs = require('fs');
const input = fs
  .readFileSync('./백트래킹/1062input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const newK = k - 5;

if (newK < 0) {
  console.log(0);
  process.exit(0);
}

const originalArr = ['a', 'n', 't', 'i', 'c'];
const original = new Set(originalArr);
const notRunning = new Set();
const words = input.slice(1).map((word) => {
  const newWord = word.slice(4, -4);
  newWord.split('').forEach((w) => {
    if (!original.has(w)) {
      notRunning.add(w);
    }
  });
  return newWord;
});

let answer = 0;

const checkWords = (arr) => {
  const copy = new Set([...arr, ...originalArr]);
  let result = 0;

  words.forEach((word) => {
    if (word.split('').every((w) => copy.has(w))) {
      result++;
    }
  });

  return result;
};

const choiceAlpha = (alpha, l, start, arr, k) => {
  if (arr.length === k) {
    const result = checkWords(arr);
    answer = Math.max(answer, result);
    return;
  }

  for (let i = start; i < l; i++) {
    arr.push(alpha[i]);
    choiceAlpha(alpha, l, start + 1, arr, k);
    arr.pop();
  }
};

const alpha = Array.from(notRunning);
const l = notRunning.size;

// choiceAlpha(alpha, l, 0, [], newK);

console.log(answer);
