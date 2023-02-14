const fs = require('fs');
const input = fs
  .readFileSync('./문자열/4358input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const treeDict = {};
let total = 0;
input.map((tree) => {
  total++;
  if (treeDict[tree]) {
    treeDict[tree] += 1;
  } else {
    treeDict[tree] = 1;
  }
});

const keys = Object.keys(treeDict).sort((a, b) => (a > b ? 1 : -1));

keys.map((key) => {
  console.log(key, ((treeDict[key] / total) * 100).toFixed(4));
});
