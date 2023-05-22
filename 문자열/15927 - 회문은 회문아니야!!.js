const fs = require('fs');
const input = fs
  .readFileSync('./문자열/15927input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const s = input[0];
let left = 0;
let right = s.length - 1;

// s가 팰린드롬이면 s-1이 팰린드롬일 것

if (s[0].repeat(s.length) === s || s.length === 1) {
  console.log(-1);
  process.exit(0);
}

let result = true;
const check = (left, right) => {
  while (left < right) {
    if (s[left] != s[right]) {
      result = false;
      return;
    }
    left += 1;
    right -= 1;
  }
};

check(left, right);

if (result) {
  console.log(s.length - 1);
} else {
  console.log(s.length);
}
