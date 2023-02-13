const fs = require('fs');
const input = fs
  .readFileSync('./구현/16236input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const n = +input[0];
const sea = input.slice(1).map((line) => line.split(' ').map(Number));

// 아기 상어 크기
let w = 2;
// 아기 상어가 먹은 물고기 개수
let eat = 0;
// 시간
let time = 0;
// 아기 상어 좌표
const coor = [0, 0];

let exit = 0;

const dx = [0, -1, 0, 1];
const dy = [1, 0, -1, 0];

// 먹이 좌표, 상어 좌표 등록
const foods = {};
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (sea[i][j] === 9) {
      coor[0] = i;
      coor[1] = j;
    }
    if (sea[i][j] !== 0 && sea[i][j] !== 9) {
      if (foods[sea[i][j]]) {
        foods[sea[i][j]].push([i, j]);
      } else {
        foods[sea[i][j]] = [[i, j]];
      }
    }
  }
}

if (Object.keys(foods).length === 0) {
  console.log(0);
  return;
}

// 거리 구하기
const distance = (targetY, targetX) => {
  const q = [coor.slice()];
  const visited = Array.from(Array(n), () => Array(n).fill(0));
  let index = 0;

  while (index !== q.length) {
    const [y, x] = q[index];
    if (y === targetY && x === targetX) {
      break;
    }
    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];
      if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
        // 아기 상어가 떠난 자리는 9에서 0이 되므로 9인 경우도 추가
        if (visited[ny][nx] === 0 && (sea[ny][nx] <= w || sea[ny][nx] === 9)) {
          q.push([ny, nx]);
          visited[ny][nx] = visited[y][x] + 1;
        }
      }
    }
    index++;
  }

  return visited[targetY][targetX];
};

const findMoreClosed = (coors) => {
  return [...coors].sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  })[0];
};

// 먹을 거 찾기
// 자기 크기보다 작은 먹이 중 가장 가까운 먹이 찾기
const findFood = () => {
  let min_dis = 1000;
  const min_coors = [];
  for (let [key, value] of Object.entries(foods)) {
    if (+key >= w) {
      continue;
    }
    value.map(([y, x]) => {
      const dis = distance(y, x);
      if (dis !== 0) {
        if (min_dis > dis) {
          min_dis = dis;
          min_coors.length = [];
        }
        if (min_dis >= dis) {
          min_coors.push([y, x]);
        }
      }
    });
  }
  if (min_coors.length === 0) {
    exit = 1;
    return;
  }
  // 한 개일 때
  if (min_coors.length === 1) {
    return [min_dis, min_coors[0]];
  }

  // 여러 개일 때 가장 위쪽, 왼쪽에 있는 것
  return [min_dis, findMoreClosed(min_coors)];
};

// 아기 상어 크기 조절
const resizeShark = () => {
  if (eat === w) {
    eat = 0;
    w++;
  }
};

// 먹이 좌표에서 먹은 칸 좌표 빼기
const removeCoor = (foodSize, targetCoor) => {
  const newFood = [...foods[foodSize]].filter(
    (coor) => coor[0] !== targetCoor[0] || coor[1] !== targetCoor[1]
  );
  foods[foodSize] = newFood;
};

while (true) {
  // for (let i = 0; i < 4; i++) {
  const min = findFood();
  if (exit === 1) {
    break;
  }
  const [min_dis, min_coor] = min;
  //   console.log(min_coor, min_dis);
  const [y, x] = min_coor;
  time += min_dis;
  coor[0] = y;
  coor[1] = x;
  removeCoor(sea[y][x], min_coor);
  eat++;
  resizeShark();
}

console.log(time);

// 오답 노트
// 1. sort 문제
// 2. 아기 상어가 떠난 자리를 빈 공간으로 치지 않았음
// 3. foods 객체에서 물고기 크기가 key인데 key값을 잘못 줬음 -> value에서 먹힌 물고기의 좌표값을 지워줘야 하는데 제대로 지워지지 않았음
