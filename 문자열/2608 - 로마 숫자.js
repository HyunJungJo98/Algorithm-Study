const fs = require('fs');
const input = fs
  .readFileSync('./문자열/2608input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const romNum1 = input[0];
const romNum2 = input[1];

const dic = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
};

const dic2 = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M',
  4: 'IV',
  9: 'IX',
  40: 'XL',
  90: 'XC',
  400: 'CD',
  900: 'CM',
};

let sum1 = 0;
let sum2 = 0;
let q = [];
let index = 0;

romNum1.split('').forEach((num) => {
  if (q.length === index) {
    q.push(num);
    return;
  }
  const newNum = q[index] + num;
  if (dic[newNum]) {
    sum1 += dic[newNum];
  } else {
    sum1 += dic[q[index]];
    q.push(num);
  }
  index++;
});

if (q.length > index) {
  sum1 += dic[q[index]];
}

q.length = 0;
index = 0;

romNum2.split('').forEach((num) => {
  if (q.length === index) {
    q.push(num);
    return;
  }
  const newNum = q[index] + num;
  if (dic[newNum]) {
    sum2 += dic[newNum];
  } else {
    sum2 += dic[q[index]];
    q.push(num);
  }
  index++;
});

if (q.length > index) {
  sum2 += dic[q[index]];
}

let sum = sum1 + sum2;
let s = sum;

const num = [];

let i = 1000;

while (s > 0) {
  num.push(parseInt(s / i) * i);
  s = s % i;
  i = i / 10;
}

console.log(sum);

let l = 4;
let rom = '';

const findRom = (n, index) => {
  const stringN = n + '';
  const ten = 10 ** (l - index - 1);

  if (stringN[0] === '2' || stringN[0] === '3') {
    for (let i = 0; i < parseInt(n / ten); i++) {
      rom += dic2[ten + ''];
    }
  } else if (
    stringN[0] === '1' ||
    stringN[0] === '4' ||
    stringN[0] === '5' ||
    stringN[0] === '9'
  ) {
    rom += dic2[stringN];
  } else if (stringN[0] === '6' || stringN[0] === '7' || stringN[0] === '8') {
    rom += dic2[ten * 5 + ''];
    findRom(n - ten * 5, index);
  }
};

num.map((n, index) => {
  if (n === 0) {
    return;
  }
  findRom(n, index);
});

console.log(rom);
