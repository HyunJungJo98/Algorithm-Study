const fs = require('fs');
const input = fs
  .readFileSync('./대기업 코테에서 나오는 유형 모음/20006input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [p, m] = input[0].split(' ').map(Number);
const names = input
  .slice(1, p + 1)
  .map((string) => string.split(' '))
  .map(([level, name]) => [+level, name]);
const rooms = [];

const print = (i, len) => {
  if (len === m) {
    console.log('Started!');
  } else {
    console.log('Waiting!');
  }

  rooms[i][1]
    .sort((a, b) => (a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0))
    .map(([level, name]) => console.log(level, name));
};

// 조건에 맞는 방이 있으면 들어가기, 없으면 방 생성
const findRoom = (level, name) => {
  for (let i = 0; i < rooms.length; i++) {
    if (
      rooms[i][0] >= level - 10 &&
      rooms[i][0] <= level + 10 &&
      rooms[i][1].length < m
    ) {
      rooms[i][1].push([level, name]);
      return;
    }
  }

  rooms.push([level, [[level, name]]]);
};

for (let i = 0; i < p; i++) {
  const [level, name] = names[i];
  if (rooms.length === 0) {
    rooms.push([level, [[level, name]]]);
    continue;
  }

  findRoom(level, name);
}

rooms.forEach((room, i) => {
  print(i, room[1].length);
});
