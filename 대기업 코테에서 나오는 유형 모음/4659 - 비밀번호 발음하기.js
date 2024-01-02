const fs = require('fs');
const input = fs
  .readFileSync('./대기업 코테에서 나오는 유형 모음/4659input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

const checkPassword = (password) => {
  // 연속된 모음 개수
  let v = 0;
  // 연속된 자음 개수
  let c = 0;
  // 마지막 모음
  let lastV = '';

  for (let i = 0; i < password.length; i++) {
    if (vowels.has(password[i])) {
      v++;
      lastV = password[i];
      c = 0;
    } else {
      c++;
      v = 0;
    }

    // 모음 3개, 자음 3개 연속으로 올 때
    if (v >= 3 || c >= 3) {
      return false;
    }

    // 자음이 같은 거 두 개가 반복될 떄
    if (c === 2 && i > 0 && password[i] === password[i - 1]) {
      return false;
    }

    // 모음이 같은 거 두개가 반복될 때
    if (v === 2 && i > 0 && password[i] === password[i - 1]) {
      if (password[i] !== 'e' && password[i] !== 'o') {
        return false;
      }
    }
  }

  // 모음이 하나도 없을 때
  if (lastV === '') {
    return false;
  }
  return true;
};

input.forEach((password) => {
  if (password === 'end') {
    return;
  }
  console.log(
    `<${password}> is ${checkPassword(password) ? '' : 'not '}acceptable.`
  );
});
