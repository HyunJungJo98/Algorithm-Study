const fs = require('fs');
const input = fs
  .readFileSync('./대기업 코테에서 나오는 유형 모음/2668input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const numbers1 = new Array(n).fill(0).map((_, i) => i + 1);
const numbers2 = input.slice(1).map(Number);
const answer = new Set();

const dict = {};
numbers2.forEach((num) => (dict[num] ? (dict[num] += 1) : (dict[num] = 1)));

const isSameSet = (set1, set2) => {
  const arr1 = Array.from(set1);
  const diff = arr1.filter((a) => !set2.has(a));

  return !diff.length ? true : false;
};

const makeSet = (num, index) => {
  console.log(num, '-----');
  const set1 = new Set([num]);
  const set2 = new Set([numbers2[index]]);

  let cur = numbers2[index];

  while (true) {
    if (set1.has(numbers1[cur - 1]) || set2.has(numbers2[cur - 1])) {
      break;
    }
    set1.add(numbers1[cur - 1]);
    set2.add(numbers2[cur - 1]);

    cur = numbers2[cur - 1];
  }

  if (isSameSet(set1, set2)) {
    return set1;
  }
  return false;
};

for (let i = 0; i < n; i++) {
  if (!dict[numbers1[i]]) {
    continue;
  }
  const set = makeSet(numbers1[i], i);
  if (set) {
    answer.add(...set);
  }
}

console.log(answer.size);
Array.from(answer)
  .sort((a, b) => a - b)
  .forEach((answer) => console.log(answer));
