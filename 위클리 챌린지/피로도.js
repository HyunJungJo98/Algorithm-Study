let m = 0;

const dfs = (dungeons, visited, arr, k) => {
  //console.log(arr.length);

  for (let i = 0; i < dungeons.length; i++) {
    if (dungeons[i][0] <= k && visited[i] === 0) {
      k -= dungeons[i][1];
      arr.push(dungeons[i]);
      visited[i] = 1;
      //console.log("???", m, arr.length);
      if (arr.length > m) {
        m = arr.length;
        //console.log(m);
      }
      dfs(dungeons, visited, arr, k);
      k += dungeons[i][1];
      arr.pop();
      visited[i] = 0;
    }
  }
};

function solution(k, dungeons) {
  let visited = new Array(dungeons.length).fill(0);
  let arr = new Array();

  dfs(dungeons, visited, arr, k);

  console.log(m);

  return m;
}

const k = 80;
dungeons = [
  [80, 20],
  [50, 40],
  [30, 10],
];
console.log(solution(k, dungeons));
