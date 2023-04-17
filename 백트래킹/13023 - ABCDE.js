const fs = require('fs');
const input = fs
  .readFileSync('./백트래킹/13023input.txt')
  .toString()
  .trim()
  .split('\r\n');
// dev 앞에 /안 붙일 시 런타임 에러(TypeError)
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
// 2차원 배열에 저장하지 말고 객체에 저장해보기
const friends = {};
// const friends = Array.from(Array(n), () => Array(n).fill(0));
// const visited = Array.from(Array(n), () => Array(n).fill(0));
for (let i = 1; i < m + 1; i++) {
  const [a, b] = input[i].split(' ');
  if (friends[a]) {
    friends[a].push(b);
  } else {
    friends[a] = [b];
  }
  if (friends[b]) {
    friends[b].push(a);
  } else {
    friends[b] = [a];
  }
}

const relation = [];
let isExist = 0;

const dfs = (row) => {
  console.log('row', row, relation);
  if (relation.length === 5 || isExist === 1) {
    isExist = 1;
    return;
  }

  for (let i = 0; i < friends[row].length; i++) {
    if (!relation.includes(friends[row][i])) {
      console.log('?', friends[row][i]);
      relation.push(friends[row][i]);
      dfs(friends[row][i]);
      relation.pop();
    }
  }
};

console.log(friends);

for (let key in friends) {
  for (let i = 0; i < friends[key].length; i++) {
    relation.push(key);
    relation.push(friends[key][i]);
    dfs(friends[key][i]);
    relation.pop();
    relation.pop();
  }
}

console.log(isExist);
