function solution(maps) {
  let answer = -1;
  const l1 = maps.length;
  const l2 = maps[0].length;

  let visited = Array.from(new Array(l1), () => new Array(l2).fill(0));

  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  let q = new Array();
  // 행, 열, 깊이
  q.push([0, 0, 1]);
  visited[0][0] = 1;
  while (q.length != 0) {
    [x, y, c] = q.shift();
    if (x == l1 - 1 && y == l2 - 1) {
      answer = c;
      break;
    }
    for (let i = 0; i < 4; i++) {
      const nx = dx[i] + x;
      const ny = dy[i] + y;
      if (0 <= nx && nx < l1 && 0 <= ny && ny < l2) {
        if (visited[nx][ny] == 0 && maps[nx][ny] == 1) {
          q.push([nx, ny, c + 1]);
          visited[nx][ny] = 1;
        }
      }
    }
    console.log(x, y, c);
  }

  return answer;
}

const maps = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];
console.log("answer : ", solution(maps));
