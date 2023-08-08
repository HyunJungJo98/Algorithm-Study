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

const R = () => {
  let dict = {};
  let nArr = [];
  let l = 0;

  arr.map((a) => {
    a.map((num) => {
      if (dict[num]) {
        dict[num]++;
      } else {
        dict[num] = 1;
      }
    });
    nArr.push(sort(dict));
    if (nArr[nArr.length - 1].length > l) {
      l = nArr[nArr.length - 1].length;
    }
    dict = {};
  });

  nArr.map((arr) => {
    if (arr.length < l) {
      while (arr.length !== l) {
        arr.push(0);
      }
    }
  });

  return nArr;
};

const C = () => {};

while (t < MAX_TIME) {
  // R연산 실행
  if (arr.length >= arr[0].length) {
    arr = R();
  }
  // C연산 실행
  else {
    C();
  }
  t++;
  break;
}
