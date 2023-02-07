const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(input);
  process.exit();
});

const heap = [];
function getParentIndex(i) {
  return Math.floor((i - 1) / 2);
}
const getLeftChildIndex = (i) => {
  return i * 2 + 1;
};
const getRightChildIndex = (i) => {
  return i * 2 + 2;
};
const swap = (index1, index2) => {
  const temp = heap[index1];
  heap[index1] = heap[index2];
  heap[index2] = temp;
};

const heapifyUp = () => {
  let currentIndex = heap.length - 1;
  while (heap[currentIndex] > heap[getParentIndex(currentIndex)]) {
    swap(currentIndex, getParentIndex(currentIndex));
    currentIndex = getParentIndex(currentIndex);
  }
};

const push = (key) => {
  heap.push(key);
  heapifyUp();
};

const heapifyDown = () => {
  let currentIndex = 0;
  while (heap[getLeftChildIndex(currentIndex)] !== undefined) {
    let biggestChildIndex = getLeftChildIndex(currentIndex);
    if (
      heap[getRightChildIndex(currentIndex) !== undefined] &&
      heap[getRightChildIndex(currentIndex)] >
        heap[getLeftChildIndex(currentIndex)]
    ) {
      biggestChildIndex = getRightChildIndex(currentIndex);
    }
    if (heap[currentIndex] < heap[biggestChildIndex]) {
      swap(currentIndex, biggestChildIndex);
      currentIndex = biggestChildIndex;
    } else {
      return;
    }
  }
};

const poll = () => {
  const maxValue = heap[0];
  heap[0] = heap[heap.length - 1];
  heap.length--;
  heapifyDown();
  return maxValue;
};

function solution(input) {
  const n = +input[0];
  if (n === 1) {
    console.log(0);
    return;
  }

  let dasom = input[1];

  input.slice(2).map((num) => {
    push(parseInt(num));
  });

  if (dasom > heap[0]) {
    console.log(0);
    return;
  }

  let max = poll();
  let cnt = 0;

  while (max >= dasom) {
    push(max - 1);
    dasom++;
    cnt++;
    max = poll();
  }
  console.log(cnt);
}
