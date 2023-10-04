function solution(book_time) {
  const book = book_time.map(([start, end]) => {
    const [shour, smin] = start.split(':').map(Number);
    const [ehour, emin] = end.split(':').map(Number);
    return [shour * 60 + smin, ehour * 60 + emin + 10];
  });

  book.sort((a, b) => a[0] - b[0]);

  const rooms = [];
  rooms.push(book[0]);

  for (let i = 1; i < book_time.length; i++) {
    const l = rooms.length;
    let flag = 0;
    // 방을 순회하면서 해당 방에서 가장 끝(가장 큰 퇴실 시간)보다
    // 입실 시간(book[i][0])이 크면 해당 방에 넣음
    for (let j = 0; j < l; j++) {
      if (rooms[j][rooms[j].length - 1] <= book[i][0]) {
        rooms[j].push(...book[i]);
        flag = 1;
        break;
      }
    }
    // 어느 방에도 들어가지 못했다면 새로운 방에 넣음
    if (!flag) {
      rooms.push(book[i]);
    }
  }

  return rooms.length;
}

console.log(
  solution([
    ['09:10', '10:10'],
    ['10:20', '12:20'],
  ])
);
