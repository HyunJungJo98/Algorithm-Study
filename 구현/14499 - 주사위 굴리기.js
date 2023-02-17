const fs = require('fs');
const input = fs
  .readFileSync('./구현/14499input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const [n, m, x, y, k] = input[0].split(' ').map(Number);

const map = input
  .slice(1, input.length - 1)
  .map((line) => line.split(' ').map(Number));

const orders = input[input.length - 1].split(' ').map(Number);

let diceV = [0, 0, 0, 0];
let diceL = 0;
let diceR = 0;
const diceCoor = [x, y];

// 순서대로 동, 서, 북, 남
const dx = [1, -1, 0, 0];
const dy = [0, 0, -1, 1];

// 지도 밖으로 나가는지 확인, 주사위의 x, y 좌표 바꾸기
const isInMap = (dir) => {
  const nx = dx[dir] + diceCoor[1];
  const ny = dy[dir] + diceCoor[0];
  if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
    diceCoor[0] = ny;
    diceCoor[1] = nx;
    return true;
  }
  return false;
};

// 동서남북에 따라 주사위 전개도 바꾸기
// 동
const right = () => {
  //   console.log('동');
  if (!isInMap(0)) {
    return false;
  }
  // 왼쪽이 윗면으로
  const ceil = diceV[1];
  diceV[1] = diceL;
  // 아랫면이 왼쪽으로
  diceL = diceV[3];
  // 오른쪽이 아랫면으로
  diceV[3] = diceR;
  // 윗면이 오른쪽으로
  diceR = ceil;

  return true;
};
// 서
const left = () => {
  //   console.log('서');
  if (!isInMap(1)) {
    return false;
  }

  // 아랫면이 오른쪽으로
  const right = diceR;
  diceR = diceV[3];
  // 왼쪽이 아랫면으로
  diceV[3] = diceL;
  // 윗면이 왼쪽으로
  diceL = diceV[1];
  // 오른쪽이 윗면으로
  diceV[1] = right;
  return true;
};
// 북
const up = () => {
  //   console.log('북');
  if (!isInMap(2)) {
    return false;
  }
  const first = diceV[0];
  const nDiceV = diceV.slice(1);
  nDiceV.push(first);
  diceV = nDiceV;
  return true;
};
// 남
const down = () => {
  //   console.log('남');
  if (!isInMap(3)) {
    return false;
  }
  const other = diceV.slice(0, 3);
  const last = diceV[3];
  diceV = [last].concat(other);
  return true;
};

// 주사위 바닥을 지도에 복사
const diceToMap = () => {
  const floor = diceV[3];
  map[diceCoor[0]][diceCoor[1]] = floor;
};
// 지도를 주사위 바닥에 복사
const mapToDice = () => {
  const mapNum = map[diceCoor[0]][diceCoor[1]];
  diceV[3] = mapNum;
  map[diceCoor[0]][diceCoor[1]] = 0;
};

// 주사위 윗면 출력
const printCeil = () => {
  //   console.log(diceV, diceL, diceR);
  console.log(diceV[1]);
};

const orderFun = [null, right, left, up, down];

orders.forEach((order) => {
  if (!orderFun[order]()) {
    return;
  }
  if (map[diceCoor[0]][diceCoor[1]] === 0) {
    diceToMap();
  } else {
    mapToDice();
  }
  printCeil();
});

// 오답노트
// 1. x가 세로값, y가 가로값이었음
