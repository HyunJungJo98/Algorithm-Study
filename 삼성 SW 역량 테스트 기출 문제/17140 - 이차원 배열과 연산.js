const fs = require('fs');
const input = fs
  .readFileSync('./삼성 SW 역량 테스트 기출 문제/17140input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const MAX_TIME = 100;
const [r, c, k] = input[0].split(' ').map(Number);
let arr = input.slice(1).map((i) => i.split(' ').map(Number));
let t = 0;

const isEnd = () => {
  if (r - 1 < arr.length && c - 1 < arr[0].length && arr[r - 1][c - 1] === k) {
    return true;
  }
  return false;
};

const sort = (dict) => {
  return Object.keys(dict)
    .map((key) => [Number(key), dict[key]])
    .sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] - b[0];
      } else {
        return a[1] - b[1];
      }
    })
    .reduce((prev, cur) => [...prev, ...cur]);
};

const makeNArr = (I, J, rc) => {
  let dict = {};
  let nArr = [];
  let l = 0;

  for (let i = 0; i < I; i++) {
    for (let j = 0; j < J; j++) {
      const num = rc === 'R' ? arr[i][j] : arr[j][i];
      if (num === 0) {
        continue;
      }
      if (dict[num]) {
        dict[num]++;
      } else {
        dict[num] = 1;
      }
    }
    nArr.push(sort(dict));
    if (nArr[nArr.length - 1].length > l) {
      l = nArr[nArr.length - 1].length;
    }
    dict = {};
  }
  return [nArr, l];
};

const R = () => {
  let [nArr, l] = makeNArr(arr.length, arr[0].length, 'R');

  nArr.map((arr) => {
    if (arr.length < l) {
      while (arr.length !== l) {
        arr.push(0);
      }
    }
  });

  return nArr;
};

const cToR = (arr, l) => {
  const nArr = Array.from(Array(l), () => Array(arr.length).fill(0));

  for (let i = 0; i < l; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][i]) {
        nArr[i][j] = arr[j][i];
      }
    }
  }

  return nArr;
};

const C = () => {
  let [nArr, l] = makeNArr(arr[0].length, arr.length, 'C');
  return cToR(nArr, l);
};

while (t <= MAX_TIME) {
  if (isEnd()) {
    console.log(t);
    process.exit(0);
  }
  // R연산 실행
  if (arr.length >= arr[0].length) {
    arr = R();
  }
  // C연산 실행
  else {
    arr = C();
  }
  t++;
}

console.log(-1);
