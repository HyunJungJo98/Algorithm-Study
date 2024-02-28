const fs = require('fs');
const input = fs
  .readFileSync('./대기업 코테에서 나오는 유형 모음/22251input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, k, p, x] = input[0].split(' ').map(Number);
const num = [
  '1111110',
  '0110000',
  '1101101',
  '1111001',
  '0110011',
  '1011011',
  '1011111',
  '1110000',
  '1111111',
  '1111011',
];
const arr = [];
let cx = '';

if (String(x).length < k) {
  cx =
    Array(k - String(x).length)
      .fill(0)
      .join('') + String(x);
} else {
  cx = String(x);
}

// 하나의 수가 다른 하나의 수가 되려면
// 몇 번 반전시켜야 하는지 저장
// ex) 0 -> 1 : 4번 반전
// arr[0][1] = 4
for (let i = 0; i < 10; i++) {
  arr.push([]);
  for (let j = 0; j < 10; j++) {
    if (i === j) {
      // 자기 자신, 아무것도 반전하지 않아도 됨
      arr[i].push(0);
      continue;
    }

    let d = 0;
    for (let m = 0; m < 7; m++) {
      if (num[i][m] !== num[j][m]) {
        d++;
      }
    }
    arr[i].push(d);
  }
}

// dep = 자릿수
// cnt = 남은 반전횟수
const dfs = (dep, cnt, cx) => {
  if (dep >= cx.length) {
    if (Number(cx) === x) {
      // 현재 층수와 같으면 안됨
      return 0;
    } else if (1 <= Number(cx) && Number(cx) <= n) {
      // 1층 이상, n층 이하일 때만 +1
      return 1;
    } else {
      // 그 외의 층은 무시
      return 0;
    }
  }

  let [result, cur] = [0, Number(cx[dep])];

  for (let i = 0; i < 10; i++) {
    // cur를 다른 숫자(i)로 바꿀 수 있을 때 === 자기 자신이 아니고, 남은 p(반전횟수)가 있을 때
    if (cur !== i && arr[cur][i] <= cnt) {
      // cur만 i로 바꿔줌, 나머지 자리는 그대로
      const dx = cx.slice(0, dep) + String(i) + cx.slice(dep + 1);
      // 다음 자릿수로 이동, 반전 횟수를 감소
      result += dfs(dep + 1, cnt - arr[cur][i], dx);
    } else if (cur === i) {
      // 자기 자신을 안 바꾸고 넘김(다른 숫자를 변경하기)
      result += dfs(dep + 1, cnt, cx);
    }
  }

  return result;
};

console.log(dfs(0, p, cx));
