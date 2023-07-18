const fs = require('fs');
const input = fs
  .readFileSync('./삼성 SW 역량 테스트 기출 문제/16235input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const D = 8;
const [n, m, k] = input[0].split(' ').map(Number);
const A = input.slice(1, n + 1).map((line) => line.split(' ').map(Number));
const trees = {};
const ground = Array.from(new Array(n), () => Array(n).fill(5));
const dx = [0, 1, 1, 1, 0, -1, -1, -1];
const dy = [-1, -1, 0, 1, 1, 1, 0, -1];

const addTrees = (r, c, age) => {
  if (!trees[r]) {
    trees[r] = {};
  }
  if (!trees[r][c]) {
    trees[r][c] = [];
  }
  trees[r][c].push([age, 1]);
};

input.slice(n + 1).forEach((tree) => {
  const t = tree.split(' ');
  const r = t[0] - 1;
  const c = t[1] - 1;
  addTrees(r, c, Number(t[2]));
});

const spring = () => {
  for (r in trees) {
    for (c in trees[r]) {
      trees[r][c].sort((a, b) => a[0] - b[0]);
      trees[r][c].forEach((tree) => {
        if (ground[Number(r)][Number(c)] >= tree[0]) {
          ground[Number(r)][Number(c)] -= tree[0];
          tree[0] += 1;
          return;
        }
        tree[1] = 0;
      });
    }
  }
};

const summer = () => {
  for (r in trees) {
    for (c in trees[r]) {
      trees[r][c].forEach((tree) => {
        if (tree[1] === 0) {
          ground[Number(r)][Number(c)] += parseInt(tree[0] / 2);
        }
      });
      trees[r][c] = trees[r][c].filter((tree) => tree[1] === 1);
      if (trees[r][c].length === 0) {
        delete trees[r][c];
      }
    }
    if (Object.keys(trees[r]).length === 0) {
      delete trees[r];
    }
  }
};

const addNewTrees = (r, c) => {
  for (let i = 0; i < D; i++) {
    const ny = dy[i] + r;
    const nx = dx[i] + c;
    if (ny >= 0 && ny < n && nx >= 0 && nx < n) {
      addTrees(ny, nx, 1);
    }
  }
};

const fall = () => {
  for (r in trees) {
    for (c in trees[r]) {
      trees[r][c].forEach((tree) => {
        if (tree[0] % 5 === 0) {
          addNewTrees(Number(r), Number(c));
        }
      });
    }
  }
};

const winter = () => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      ground[i][j] += A[i][j];
    }
  }
};

const countTrees = () => {
  let count = 0;
  for (r in trees) {
    for (c in trees[r]) {
      count += trees[r][c].length;
    }
  }
  return count;
};

for (let i = 0; i < k; i++) {
  spring();
  summer();
  fall();
  winter();
}

console.log(countTrees());
