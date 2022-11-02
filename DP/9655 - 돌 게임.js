const fs = require('fs');
// const input = fs.readFileSync('./DP/9655input.txt').toString();
const input = fs.readFileSync('dev/stdin').toString();

const n = Number(input);
if (n % 2 === 0) {
  console.log('CY');
} else {
  console.log('SK');
}
