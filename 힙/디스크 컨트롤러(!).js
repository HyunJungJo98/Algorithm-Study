// const heapfiy = (arr) => {
//   let length = arr.length;
//   if (length <= 1) return;
//   for (let i = Math.floor(length / 2); i >= 0; i--) {
//     max_heapfiy(arr, i, length);
//   }

//   for (let i = arr.length - 1; i >= 0; i--) {
//     // 최대 원소를 맨 끝에 정렬하고 다시 heap구성하는 과정
//     swap(arr, 0, i);
//     length -= 1;
//     max_heapfiy(arr, 0, length);
//   }
//   return arr;
// };

// const max_heapfiy = (arr, i, length) => {
//   let left = i * 2 + 1;
//   let right = i * 2 + 2;
//   let parent = i;

//   if (left < length && arr[left][0] < arr[parent[0]]) {
//     parent = left;
//   }
//   // arr[parent]와 비교하는 것은 앞에서 parent가 더 크면
//   // 왼쪽을 parent로 바꿔주었기 때문에 자식 중 더 큰 것과 바꾸려고
//   if (right < length && arr[right][0] < arr[parent][0]) {
//     parent = right;
//   }
//   if (i != parent) {
//     swap(arr, i, parent);
//     max_heapfiy(arr, parent, length);
//   }
// };

// const swap = (arr, i, j) => {
//   let tmp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = tmp;
// };

// const insert = (arr, data) => {
//   arr.push(data);
//   let i = arr.length - 1;
//   while (i > 0) {
//     const parent = Math.floor((i - 1) / 2);
//     if (arr[parent] > arr[i]) break;

//     swap(arr, i, parent);
//     i = parent;
//   }
//   return arr;
// };

// const del = (arr) => {
//   swap(arr, 0, arr.length - 1);
//   const max = arr.pop();
//   heapfiy(arr);
//   return max;
// };

function solution(jobs) {
  var answer = 0;

  // 들어온 순서대로 정렬
  jobs.sort((a, b) => a[0] - b[0]);

  let q = [];
  let now = 0;
  let i = 0;
  let len = jobs.length;

  while (i < len || q.length > 0) {
    // 그 다음 작업을 시작할 시점, 지금 작업이 끝난 시간 = now
    // now 전에 들어와 대기하고 있던 것들을 q에 넣어줌
    if (i < len && jobs[i][0] <= now) {
      q.push(jobs[i]);
      console.log(q);
      i++;
      continue;
    }

    // 대기하고 있던 것들을 작업 시간 오름차순으로 정렬
    q.sort((a, b) => a[1] - b[1]);
    if (q.length > 0) {
      // 총 시간 구하기
      let job = q.shift();
      // 작업이 끝난 시간
      now += job[1];
      // answer 에 작업시간 + 대기시간을 더해줌
      answer += now - job[0];
    } else {
      // q에 아무것도 없으면 작업 시작 시간을 그 다음 들어온 작업의 시작 시간으로 바꿈
      // 앞에서 i++ 해줬으므로 다음 것임
      now = jobs[i][0];
    }
  }
  return Math.floor(answer / len);
}

const jobs = [
  [0, 3],
  [1, 9],
  [2, 6],
];
console.log(solution(jobs));
