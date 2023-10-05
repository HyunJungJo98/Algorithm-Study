const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
const dl = dx.length;

const bfs = (i, j, maps) => {
  const q = [[i, j]];
  let index = 0;
  let sum = maps[i][j];

  maps[i][j] = 0;

  while (index < q.length) {
    const [y, x] = q[index];
    for (let i = 0; i < dl; i++) {
      const [ny, nx] = [y + dy[i], x + dx[i]];
      if (ny >= 0 && ny < maps.length && nx >= 0 && nx < maps[0].length) {
        if (maps[ny][nx] !== 0 && maps[ny][nx] !== 'X') {
          sum += maps[ny][nx];
          maps[ny][nx] = 0;
          q.push([ny, nx]);
        }
      }
    }
    index++;
  }

  return sum;
};

function solution(maps) {
  let answer = [];
  const cMaps = maps.map((map) =>
    map.split('').map((m) => {
      if (isNaN(m)) {
        return m;
      } else {
        return Number(m);
      }
    })
  );

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (cMaps[i][j] !== 0 && cMaps[i][j] !== 'X') {
        answer.push(bfs(i, j, cMaps));
      }
    }
  }

  if (answer.length !== 0) {
    return answer.sort((a, b) => a - b);
  } else {
    return [-1];
  }
}

console.log(solution(['X5XX5X', '111111', 'XXXXXX', '111111']));
