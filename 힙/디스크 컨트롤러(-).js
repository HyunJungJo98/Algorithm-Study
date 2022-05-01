const heapfiy = (arr) => {
  let length = arr.length;
  if (length <= 1) return;
  for (let i = Math.floor(length / 2); i >= 0; i--) {
    max_heapfiy(arr, i, length);
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    // 최대 원소를 맨 끝에 정렬하고 다시 heap구성하는 과정
    swap(arr, 0, i);
    length -= 1;
    max_heapfiy(arr, 0, length);
  }
  return arr;
};

const max_heapfiy = (arr, i, length) => {
  let left = i * 2 + 1;
  let right = i * 2 + 2;
  let parent = i;

  if (left < length && arr[left] < arr[parent]) {
    parent = left;
  }
  // arr[parent]와 비교하는 것은 앞에서 parent가 더 크면
  // 왼쪽을 parent로 바꿔주었기 때문에 자식 중 더 큰 것과 바꾸려고
  if (right < length && arr[right] < arr[parent]) {
    parent = right;
  }
  if (i != parent) {
    swap(arr, i, parent);
    max_heapfiy(arr, parent, length);
  }
};

const swap = (arr, i, j) => {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

const insert = (arr, data) => {
  arr.push(data);
  let i = arr.length - 1;
  while (i > 0) {
    const parent = Math.floor((i - 1) / 2);
    if (arr[parent] > arr[i]) break;

    swap(arr, i, parent);
    i = parent;
  }
  return arr;
};

const del = (arr) => {
  swap(arr, 0, arr.length - 1);
  const max = arr.pop();
  heapfiy(arr);
  return max;
};

function solution(jobs) {
  var answer = 0;
  console.log(heapfiy([1, 5, 3, 2, 6, 8]));
  return answer;
}

const jobs = [
  [0, 3],
  [1, 9],
  [2, 6],
];
console.log(solution(jobs));
