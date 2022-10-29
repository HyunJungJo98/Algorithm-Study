const fs = require('fs');
// const input = fs.readFileSync('./문자열/14490input.txt').toString().trim();
const input = fs.readFileSync('dev/stdin').toString().trim();

const [n, m] = input.split(':').map(Number);
if (n === m) {
  console.log('1:1');
  return;
}

const getGCD = (num1, num2) => {
  while (num2 > 0) {
    let r = num1 % num2;
    num1 = num2;
    num2 = r;
  }
  return num1;
};

const gcd = getGCD(n, m);
console.log(`${n / gcd}:${m / gcd}`);
