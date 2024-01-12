const fs = require('fs');
const input = fs
  .readFileSync('./대기업 코테에서 나오는 유형 모음/9017input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const t = +input[0];

const makeRecords = (n, rank, teams) => {
  const records = {};
  let place = 1;
  for (let i = 0; i < n; i++) {
    const team = rank[i];

    if (!teams[team]) {
      continue;
    }

    if (!records[team]) {
      records[team] = [0, 0, 0];
    }
    records[team][0] += 1;

    // 4등까지의 점수 더하기
    if (records[team][0] < 5) {
      records[team][1] += place;
    }

    // 5등의 등수 기록
    if (records[team][0] === 5) {
      records[team][2] = place;
    }

    place++;
  }

  return records;
};

const pickTeam = (n, rank) => {
  const peopleNum = {};
  for (let i = 0; i < n; i++) {
    if (!peopleNum[rank[i]]) {
      peopleNum[rank[i]] = 0;
    }
    peopleNum[rank[i]] += 1;
  }

  const teams = new Array(201).fill(0);
  Object.keys(peopleNum).forEach((team) => {
    if (peopleNum[team] >= 6) {
      teams[team] = 1;
    }
  });

  return teams;
};

const sortRecords = (records) => {
  return Object.entries(records).sort((a, b) => {
    const aScore = a[1][1];
    const bScore = b[1][1];
    const aFifthScore = a[1][2];
    const bFifthScore = b[1][2];

    if (aScore === bScore) {
      return aFifthScore - bFifthScore;
    } else {
      return aScore - bScore;
    }
  });
};

for (let i = 0; i < t; i++) {
  const n = +input[i * 2 + 1];
  const rank = input[i * 2 + 2].split(' ').map(Number);
  const teams = pickTeam(n, rank);
  const records = makeRecords(n, rank, teams);
  const sortedRecords = sortRecords(records);
  console.log(+sortedRecords[0][0]);
}
