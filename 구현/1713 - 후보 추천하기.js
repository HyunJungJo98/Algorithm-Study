const fs = require('fs');
const input = fs
  .readFileSync('./구현/1713input.txt')
  .toString()
  .trim()
  .split('\r\n');

// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const m = Number(input[1]);
const votes = input[2].split(' ').map(Number);
const photo = new Map();

const recommend = new Map();

const addRecommend = (key, value) => {
  if (recommend.has(key)) {
    recommend.get(key).add(value);
    return;
  }
  recommend.set(key, new Set([value]));
};

const findLeastRecommend = () => {
  // 오답 1.
  // 원래는 recommend.keys()를 순차적으로 순회했는데,
  // 이때 무조건 1, 2, 3 ... 순으로 순회한다는 보장이 없다.
  // recommend 객체에서 삭제되고 다시 추가되면 순서가 변경되기 때문이다.
  for (let i = 1; i < recommend.size + 1; i++) {
    if (recommend.get(i).size !== 0) {
      return [i, recommend.get(i).size, recommend.get(i)];
    }
  }
};

const findOldStudent = (students) => {
  let min = m;
  let oldStudent = 0;
  students.map((student) => {
    if (photo.get(student).time < min) {
      min = photo.get(student).time;
      oldStudent = student;
    }
  });
  return oldStudent;
};

votes.map((vote, idx) => {
  if (photo.has(vote)) {
    const prevRcm = photo.get(vote).rcm;
    // 오답 2.
    // 갱신할 때에는 index를 바꾸지 않아야 함
    const prevTime = photo.get(vote).time;
    photo.set(vote, { time: prevTime, rcm: prevRcm + 1 });
    recommend.get(prevRcm).delete(vote);
    addRecommend(prevRcm + 1, vote);
    return;
  }

  if (photo.size < n) {
    photo.set(vote, { time: idx, rcm: 1 });
    addRecommend(1, vote);
    return;
  }

  // 추천 수 작은 게 한 개일 때
  const [leastRecommendCnt, studentCnt, students] = findLeastRecommend();
  if (studentCnt === 1) {
    const target = [...students][0];
    photo.delete(target);
    photo.set(vote, { time: idx, rcm: 1 });
    recommend.delete(leastRecommendCnt);
    addRecommend(1, vote);
    return;
  }

  // 추천 수 작은 게 여러 개일 때
  const oldStudent = findOldStudent([...students]);
  const oldStudentsVoteCnt = photo.get(oldStudent).rcm;
  photo.delete(oldStudent);
  photo.set(vote, { time: idx, rcm: 1 });
  recommend.get(oldStudentsVoteCnt).delete(oldStudent);
  addRecommend(1, vote);
});

const result = Array.from(photo.keys());
console.log(result.sort((a, b) => a - b).join(' '));
