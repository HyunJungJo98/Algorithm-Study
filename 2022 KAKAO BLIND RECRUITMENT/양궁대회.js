let n = 9;
const info = [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1];

result = [];
max_num = 0;
q = [[0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]];

while (q.length !== 0) {
  const a = q.shift();
  focus = a[0];
  arrow = a[1];
  console.log(result);
  const b = arrow.reduce((x, y) => {
    return x + y;
  }, 0);
  if (b == n) {
    let apeach,
      lion = 0;
    for (let i = 0; i < 11; i++) {
      if (info[i] != 0 || arrow[i] != 0) {
        if (info[i] >= arrow[i]) {
          apeach += 10 - i;
        } else {
          lion += 10 - i;
        }
      }
      if (lion > apeach) {
        if (max_num < lion - apeach) {
          max_num = lion - apeach;
          result.clear();
        }
        result.push(arrow);
      }
    }
  } else if (b > n) {
    continue;
  }
  // 다 안 쏜 경우, 쏜 횟수가 n보다 작은데 끝까지 도달
  else if (focus == 10) {
    let tmp = arrow.slice();
    tmp[focus] =
      n -
      tmp.reduce((x, y) => {
        return x + y;
      }, 0);
    q.push([-1, tmp]);
  } else {
    let tmp = arrow.slice();
    console.log("tmp", tmp);
    tmp[focus] = info[focus] + 1;
    q.push([focus + 1, tmp]);
    let tmp2 = arrow.slice();
    tmp2[focus] = 0;
    q.push([focus + 1, tmp2]);
  }
}

console.log(result);
