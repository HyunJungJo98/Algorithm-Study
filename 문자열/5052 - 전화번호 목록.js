const fs = require('fs');
const input = fs
  .readFileSync('./문자열/5052input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const t = +input[0];
let index = 1;

for (let i = 0; i < t; i++) {
  const n = +input[index];
  const phone = input.slice(index + 1, index + n + 1);
  index += n + 1;
  const book = {};
  let result = false;
  phone.sort((a, b) => (a.length > b.length ? 1 : -1));
  phone.map((number) => {
    let s = '';
    for (let j = 0; j < number.length; j++) {
      s += number[j];
      // 다른 번호의 접두어인 경우
      if (book[s] !== undefined) {
        result = true;
        return;
      }
    }
    book[number] = true;
  });
  if (result) {
    console.log('NO');
  } else {
    console.log('YES');
  }
}
