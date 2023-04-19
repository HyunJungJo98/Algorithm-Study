const fs = require('fs');
const input = fs
  .readFileSync('./문자열/12871input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [s1, s2] = input;
const l1 = s1.length;
const l2 = s2.length;

if (l1 === l2) {
  if (s1 !== s2) {
    console.log(0);
  } else {
    console.log(1);
  }
  process.exit(0);
}

let i = 2;
while (true) {
  if (i % l1 === 0 && i % l2 === 0) {
    break;
  }
  i++;
}

let shorter = '';
let longer = '';
if (l1 < l2) {
  shorter = s1;
  longer = s2;
} else {
  shorter = s2;
  longer = s1;
}

let s3 = shorter;
let s4 = longer;

while (shorter.length !== i) {
  shorter += s3;
}

while (longer.length !== i) {
  longer += s4;
}

if (shorter === longer) {
  console.log(1);
} else {
  console.log(0);
}
