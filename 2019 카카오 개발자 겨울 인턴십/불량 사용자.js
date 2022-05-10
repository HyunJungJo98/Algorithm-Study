const dfs = (user_id, banned_id, visited, arr, s, start) => {
  if (arr.length === banned_id.length) {
    //console.log("arr:", arr);
    let a = arr.slice();
    a.sort();
    const string = a.join("");
    s.add(string);
    //console.log(s);
    return s;
  }
  for (let i = start; i < banned_id.length; i++) {
    const l = banned_id[i].length;

    for (let j = 0; j < user_id.length; j++) {
      //console.log(i, banned_id[i], user_id[j]);
      result = true;
      if (user_id[j].length === l && visited[j] === 0) {
        for (let k = 0; k < user_id[j].length; k++) {
          if (banned_id[i][k] === user_id[j][k] || banned_id[i][k] === "*") {
            continue;
          } else {
            result = false;
          }
        }
        if (result) {
          //console.log(i, user_id[j]);
          arr.push(user_id[j]);
          visited[j] = 1;
          //console.log(arr);
          dfs(user_id, banned_id, visited, arr, s, start + 1);
          arr.pop();
          visited[j] = 0;
          // console.log("뺀 후 ", arr);
        }
      }
    }
    break;
  }
  return s;
};

function solution(user_id, banned_id) {
  let visited = new Array(user_id.length).fill(0);
  let arr = new Array();
  let s = new Set();

  dfs(user_id, banned_id, visited, arr, s, 0);

  //console.log("s:", s);

  return s.size;
}

const user_id = ["frodo", "fradi", "crodo", "abc123", "frodoc"];
const banned_id = ["fr*d*", "*rodo", "******", "******"];
console.log(solution(user_id, banned_id));
