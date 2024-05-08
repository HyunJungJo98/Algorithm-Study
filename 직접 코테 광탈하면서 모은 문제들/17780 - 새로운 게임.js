const fs = require('fs');
const input = fs
  .readFileSync('./직접 코테 광탈하면서 모은 문제들/17780input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [WHITE, RED, BLUE] = [0, 1, 2];
const [n, k] = input[0].split(' ').map(Number);
const chess = input.slice(1, n + 1).map((line) => line.split(' ').map(Number));
//const piecesGraph = Array.from(Array(n), () => Array(n).fill([])) 로 하면 안 됨
const piecesGraph = Array.from(Array(n), () => Array(n).fill(0)).map((line) =>
  line.map(() => [])
);
const pieces = Array(k + 1).fill([]);
const dx = [0, 1, -1, 0, 0];
const dy = [0, 0, 0, -1, 1];

for (let i = n + 1; i < n + k + 1; i++) {
  const [y, x, d] = input[i].split(' ').map(Number);
  pieces[i - n] = { num: i - n, y: y - 1, x: x - 1, d, bottom: 0 };

  piecesGraph[y - 1][x - 1].push(i - n);
}

const isEnd = () => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (piecesGraph[i][j].length >= 4) {
        return true;
      }
    }
  }
  return false;
};

const goWhite = (ny, nx, y, x) => {
  const curPosition = piecesGraph[y][x];
  const arr = [...piecesGraph[ny][nx]];

  for (let i = 0; i < curPosition.length; i++) {
    const newPosition = piecesGraph[ny][nx];

    if (i === 0 && newPosition.length !== 0) {
      pieces[curPosition[0]].bottom = newPosition[newPosition.length - 1];
    }

    arr.push(curPosition[i]);
    pieces[curPosition[i]].y = ny;
    pieces[curPosition[i]].x = nx;
  }
  piecesGraph[ny][nx] = arr;
  curPosition.length = 0;
};

const goRed = (ny, nx, y, x) => {
  const curPosition = [...piecesGraph[y][x]].reverse();
  const arr = [...piecesGraph[ny][nx]];

  for (let i = 0; i < curPosition.length; i++) {
    const newPosition = piecesGraph[ny][nx];

    if (i === 0 && newPosition.length !== 0) {
      pieces[curPosition[0]].bottom = newPosition[newPosition.length - 1];
    } else if (i === 0) {
      pieces[curPosition[0]].bottom = 0;
    } else {
      pieces[curPosition[i]].bottom = curPosition[i - 1];
    }

    arr.push(curPosition[i]);
    pieces[curPosition[i]].y = ny;
    pieces[curPosition[i]].x = nx;
  }

  piecesGraph[ny][nx] = arr;
  piecesGraph[y][x].length = 0;
};

const getNewDirection = (d) => {
  if (d % 2 === 1) {
    return d + 1;
  } else {
    return d - 1;
  }
};

const goBlue = (num, y, x, d) => {
  const newD = getNewDirection(d);
  const [ny, nx] = [y + dy[newD], x + dx[newD]];
  pieces[num].d = newD;

  if (chess[ny][nx] === BLUE || ny < 0 || ny >= n || nx < 0 || nx >= n) {
    return;
  }
  if (chess[ny][nx] === RED) {
    goRed(ny, nx, y, x);
  } else if (chess[ny][nx] === WHITE) {
    goWhite(ny, nx, y, x);
  }
};

let answer = 0;
while (answer <= 1000) {
  if (isEnd()) {
    console.log(answer);
    process.exit(0);
  }

  for (let i = 1; i < k + 1; i++) {
    if (pieces[i].bottom !== 0) {
      continue;
    }

    const { num, y, x, d, bottom } = pieces[i];
    const [ny, nx] = [y + dy[d], x + dx[d]];

    if (ny >= 0 && ny < n && nx >= 0 && nx < n) {
      if (chess[ny][nx] === WHITE) {
        goWhite(ny, nx, y, x);
      } else if (chess[ny][nx] === RED) {
        goRed(ny, nx, y, x);
      } else {
        goBlue(num, y, x, d);
      }
    } else {
      goBlue(num, y, x, d);
    }
  }

  answer++;
}

console.log(-1);
