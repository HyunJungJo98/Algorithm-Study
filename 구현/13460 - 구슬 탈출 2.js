const fs = require('fs');
const input = fs
  .readFileSync('./구현/13460input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const board = input.slice(1).map((line) => line.split(''));
const red = [];
const blue = [];
const hole = [];

let cnt = 0;
let result = false;

// 상, 하, 좌, 우
const dirs = ['up', 'down', 'left', 'right'];
const coords = { up: [-1, 0], down: [1, 0], left: [0, -1], right: [0, 1] };

const move = [];

board.forEach((line, i) => {
  line.forEach((square, j) => {
    if (square === 'R') {
      red.push([i, j]);
    }
    if (square === 'B') {
      blue.push([i, j]);
    }
    if (square === 'O') {
      hole.push(i);
      hole.push(j);
    }
  });
});

const isRoad = (ny, nx) => {
  if (ny >= n || ny < 0 || nx >= m || nx < 0) {
    return false;
  }
  if (board[ny][nx] === '#') {
    return false;
  }
  if (ny === blue[blue.length - 1][0] && nx === blue[blue.length - 1][1]) {
    return false;
  }
  if (ny === red[red.length - 1][0] && nx === red[red.length - 1][1]) {
    return false;
  }
  if (ny === hole[0] && nx === hole[1]) {
    return 'O';
  }
  return true;
};

// red, blue 좌표 이동시키기 === push
// red만 O에 빠지면 result = true로 만들기
const moveBoard = (dir) => {
  // let redny = red[red.length - 1][0] + coords[dir][0];
  // let rednx = red[red.length - 1][1] + coords[dir][1];
  // let isRedInHole = false;
  // let blueny = blue[blue.length - 1][0] + coords[dir][0];
  // let bluenx = blue[blue.length - 1][1] + coords[dir][1];
  // let isBlueInHole = false;
};

// red, blue 좌표 이전으로 되돌리기 === pop
const removeBoard = () => {
  red.pop();
  blue.pop();
};

// 파란색 공이 구멍에 빠졌는지
const isBlueInTheHole = () => {};

const dfs = () => {
  if (result === true || move.length > 10 || isBlueInTheHole()) {
    return;
  }
  dirs.forEach((dir) => {
    // 빈 칸 찾기
    const ny = red[red.length - 1][0] + coords[dir][0];
    const nx = red[red.length - 1][1] + coords[dir][1];

    if (0 <= ny && n > ny && 0 <= nx && m > nx) {
      if (board[ny][nx] === '.' || board[ny][nx] === 'O') {
        console.log(dir);
        move.push(dir);
        moveBoard(dir);
        dfs();
        removeBoard();
        move.pop();
      }
    }
  });
};

dfs();
