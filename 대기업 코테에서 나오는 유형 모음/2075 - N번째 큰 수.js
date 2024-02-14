const fs = require('fs');
const input = fs
  .readFileSync('./대기업 코테에서 나오는 유형 모음/2075input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 최소힙 구현, readline import
const n = +input[0];
const arr = input.slice(1).map((line) => line.split(' ').map(Number));
const arr2 = [];

arr.map((line) => line.map((num) => arr2.push(num)));
arr2.sort((a, b) => a - b);
console.log(arr2[n ** 2 - n]);
