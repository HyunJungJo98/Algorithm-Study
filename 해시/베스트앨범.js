function solution(genres, plays) {
  let answer = [];
  const cnt = {};
  const songs = {};

  genres.forEach((genre, i) => {
    if (cnt[genre]) {
      cnt[genre] += plays[i];
    } else {
      cnt[genre] = plays[i];
    }
    if (songs[genre]) {
      songs[genre].push([i, plays[i]]);
    } else {
      songs[genre] = [[i, plays[i]]];
    }
  });

  const cntArr = Object.entries(cnt).sort((a, b) => b[1] - a[1]);
  cntArr.forEach((genre) => {
    const song = songs[genre[0]].sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] - b[0];
      } else {
        return b[1] - a[1];
      }
    });
    answer.push(song[0][0]);
    if (song.length > 1) {
      answer.push(song[1][0]);
    }
  });
  return answer;
}

console.log(
  solution(
    ['classic', 'pop', 'classic', 'classic', 'pop'],
    [500, 600, 150, 800, 2500]
  )
);
