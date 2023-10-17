const getCoords = (maps) => {
  const coor = {};
  maps.forEach((map, i) => {
    for (let j = 0; j < map.length; j++) {
      if (map[j] === 'S') {
        coor['s'] = [i, j];
      }
      if (map[j] === 'L') {
        coor['l'] = [i, j];
      }
      if (map[j] === 'E') {
        coor['e'] = [i, j];
      }
    }
  });

  return coor;
};

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const bfs = (start, end, maps) => {
  const q = [[...start, 0]];
  const visited = Array.from(Array(maps.length), () =>
    Array(maps[0].length).fill(0)
  );
  let index = 0;

  visited[start[0]][start[1]] = 1;

  while (index < q.length) {
    const [y, x, dep] = q[index];
    if (y === end[0] && x === end[1]) {
      return dep;
    }

    for (let i = 0; i < dx.length; i++) {
      const [ny, nx] = [y + dy[i], x + dx[i]];
      if (ny >= 0 && ny < maps.length && nx >= 0 && nx < maps[0].length) {
        if (maps[ny][nx] !== 'X' && visited[ny][nx] === 0) {
          q.push([ny, nx, dep + 1]);
          visited[ny][nx] = 1;
        }
      }
    }
    index++;
  }

  return false;
};

function solution(maps) {
  const coor = getCoords(maps);

  const sl = bfs(coor.s, coor.l, maps);
  if (!sl) {
    return -1;
  }
  const le = bfs(coor.l, coor.e, maps);
  if (!le) {
    return -1;
  }

  return sl + le;
}

console.log(solution(['XXXXL', 'XOOSX', 'XXXXX', 'XXXOO', 'EXXXX', 'XXXXX']));
