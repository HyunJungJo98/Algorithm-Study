function solution(cards) {
  const visited = Array(cards.length).fill(0);
  const cardGroupLen = [];

  let index = 0;

  while (index < cards.length) {
    if (visited[index] === 1) {
      index++;
      continue;
    }

    let nextIndex = cards[index] - 1;
    let cnt = 1;
    visited[index] = 1;
    while (visited[nextIndex] === 0) {
      visited[nextIndex] = 1;
      cnt++;
      nextIndex = cards[nextIndex] - 1;
    }
    cardGroupLen.push(cnt);
  }
  index++;

  if (cardGroupLen.length === 1) {
    return 0;
  }

  cardGroupLen.sort((a, b) => b - a);
  return cardGroupLen[0] * cardGroupLen[1];
}

console.log(solution([8, 6, 3, 7, 2, 5, 1, 4]));
