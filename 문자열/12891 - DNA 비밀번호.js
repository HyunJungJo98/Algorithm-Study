const fs = require('fs');
const input = fs
  .readFileSync('./문자열/12891input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [s, p] = input[0].split(' ').map(Number);
const dna = input[1];
const [a, c, g, t] = input[2].split(' ').map(Number);
const dict = {};
[dict['A'], dict['C'], dict['G'], dict['T']] = [0, 0, 0, 0];
let result = 0;

const check = () => {
  if (dict['A'] >= a && dict['C'] >= c && dict['G'] >= g && dict['T'] >= t) {
    return true;
  }
  return false;
};

for (let i = 0; i < p; i++) {
  dict[dna[i]]++;
}

if (check()) {
  result++;
}

for (let i = 0; i < s - p; i++) {
  dict[dna[i]] -= 1;
  dict[dna[i + p]] += 1;
  if (check()) {
    result++;
  }
}

console.log(result);
