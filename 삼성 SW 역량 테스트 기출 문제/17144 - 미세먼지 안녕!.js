const fs = require('fs');
const input = fs
  .readFileSync('./삼성 SW 역량 테스트 기출 문제/17144input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [r, c, t] = input[0].split(' ').map(Number);
const home = input.slice(1).map((line) => line.split(' ').map(Number));

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

const airCleaner = [];

let home2 = Array.from(new Array(r), () => Array(c).fill(0));

const findAirCleaner = () => {
  home.map((line, i) =>
    line.map((square) => {
      if (square === -1) {
        airCleaner.push(i);
      }
    })
  );
};

const copyHome = () => {
  home.map((r, i) => r.map((c, j) => (home2[i][j] = c)));
};

const spread = () => {
  home2.map((line, i) => {
    line.map((dust, j) => {
      if (home2[i][j] === 0 || home2[i][j] === -1 || home2[i][j] < 5) {
        return;
      }

      // 확산된 미세먼지 계산
      const spreadAmount = Math.floor(dust / 5);
      let direction = 0;
      // dx, dy 이용해서 상하좌우에 확산, 확산되는 방향 개수 구하기
      for (let k = 0; k < 4; k++) {
        const ny = dy[k] + i;
        const nx = dx[k] + j;

        if (ny >= 0 && ny < r && nx >= 0 && nx < c) {
          if (home2[ny][nx] !== -1) {
            direction++;
            home[ny][nx] += spreadAmount;
          }
        }
      }

      // 남은 미세먼지 입력
      home[i][j] = home[i][j] - spreadAmount * direction;
    });
  });
};

const operateAirCleanerUp = () => {
  const up = airCleaner[0];
  // 오른쪽으로 이동
  let temp = home[up][c - 1];
  for (let i = c - 1; i > 1; i--) {
    home[up][i] = home[up][i - 1];
  }
  home[up][1] = 0;

  // 위로 이동
  let temp2 = home[0][c - 1];
  for (let i = 0; i < up - 1; i++) {
    home[i][c - 1] = home[i + 1][c - 1];
  }
  home[up - 1][c - 1] = temp;

  // 왼쪽으로 이동
  temp = home[0][0];
  for (let i = 0; i < c - 1; i++) {
    home[0][i] = home[0][i + 1];
  }
  home[0][c - 2] = temp2;

  // 아래로 이동
  for (let i = up - 1; i > 1; i--) {
    home[i][0] = home[i - 1][0];
  }
  home[1][0] = temp;
};

const operateAirCleanerDown = () => {
  const down = airCleaner[1];

  // 오른쪽으로 이동
  let temp = home[down][c - 1];
  for (i = c - 1; i > 1; i--) {
    home[down][i] = home[down][i - 1];
  }
  home[down][1] = 0;

  // 아래로 이동
  let temp2 = home[r - 1][c - 1];
  for (i = r - 1; i > down + 1; i--) {
    home[i][c - 1] = home[i - 1][c - 1];
  }
  home[down + 1][c - 1] = temp;

  // 왼쪽으로 이동
  temp = home[r - 1][0];
  for (i = 0; i < c - 2; i++) {
    home[r - 1][i] = home[r - 1][i + 1];
  }
  home[r - 1][c - 2] = temp2;

  // 위로 이동
  for (i = down + 1; i < r - 2; i++) {
    home[i][0] = home[i + 1][0];
  }
  home[r - 2][0] = temp;
};

findAirCleaner();

for (let i = 0; i < t; i++) {
  // console.log(i + 1, '-----------------');
  copyHome();
  spread();
  // console.log(home);
  operateAirCleanerUp();
  operateAirCleanerDown();
  // console.log(home);
}

let result = 0;
for (let i = 0; i < r; i++) {
  for (let j = 0; j < c; j++) {
    result += home[i][j];
  }
}

console.log(result + 2);
