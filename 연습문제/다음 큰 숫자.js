let n = 78;

// 2진수 변환
const a = n.toString(2);
// 배열로 변환
arr = a.split("");
// 1의 개수 구하기
count = arr.filter((e) => "1" === e).length;

result = 0;
while (true) {
  n += 1;
  const b = n.toString(2);
  arr2 = b.split("");
  count2 = arr2.filter((e) => "1" === e).length;
  if (count === count2) {
    result = n;
    break;
  }
}

console.log(result);
