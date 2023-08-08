const fs = require('fs');
const input = fs
  .readFileSync('./문자열/19583input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [s, e, q] = input[0].split(' ');
const [sHour, sMin] = s.split(':').map(Number);
const [eHour, eMin] = e.split(':').map(Number);
const [qHour, qMin] = q.split(':').map(Number);
const dict = {};
let cnt = 0;

// 00:00 ~ 개총 시작 && dict에 이름이 없을 때
const startCheck = (time, name) => {
  const [timeHour, timeMin] = time.split(':').map(Number);
  if (timeHour > sHour) {
    return false;
  }
  if (timeHour === sHour && timeMin > sMin) {
    return false;
  }
  if (dict[name]) {
    return false;
  }
  return true;
};

const endCheck = (time, name) => {
  const [timeHour, timeMin] = time.split(':').map(Number);
  if (timeHour < eHour) {
    return false;
  }
  if (timeHour === eHour && timeMin < eMin) {
    return false;
  }
  if (timeHour > qHour) {
    return false;
  }
  if (timeHour === qHour && timeMin > qMin) {
    return false;
  }
  if (!dict[name]) {
    return false;
  }
  return true;
};

const check = (time, name) => {
  if (startCheck(time, name)) {
    dict[name] = 1;
    return false;
  }
  // 개총 끝 ~ 스트리밍 끝 && dict[이름] === 1일 때
  if (endCheck(time, name)) {
    delete dict[name];
    return true;
  }
};

for (let i = 1; i < input.length; i++) {
  const [time, name] = input[i].split(' ');
  if (check(time, name)) {
    cnt++;
  }
}

console.log(cnt);
