const fs = require('fs');
const input = fs
  .readFileSync('./그리디/1202input.txt')
  .toString()
  .trim()
  .split('\r\n');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  size() {
    return this.heap.length;
  }

  push(v) {
    this.heap.push(v);

    // heapifyUp
    let index = this.heap.length - 1;
    let parent = Math.floor((index - 1) / 2);

    while (this.heap[parent] < v) {
      this.swap(parent, index);
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  pop() {
    // 루트랑 맨 아래 자식이랑 swap 후 pop
    const lastIdx = this.heap.length - 1;
    this.swap(0, lastIdx);
    let value = this.heap.pop();

    let idx = 0;
    let leftChild = idx * 2 + 1;
    let rightChild = idx * 2 + 2;

    // heapifyDown
    while (leftChild < this.heap.length) {
      let largerIdx = leftChild;
      if (
        rightChild < this.heap.length &&
        this.heap[rightChild] > this.heap[leftChild]
      ) {
        largerIdx = rightChild;
      }

      if (this.heap[largerIdx] > this.heap[idx]) {
        this.swap(largerIdx, idx);
        idx = largerIdx;
        leftChild = idx * 2 + 1;
        rightChild = idx * 2 + 2;
      } else {
        break;
      }
    }

    return value;
  }
}

const [n, k] = input[0].split(' ').map(Number);
const stones = input
  .slice(1, n + 1)
  .map((stone) => stone.split(' ').map(Number))
  .sort((a, b) => a[0] - b[0]);
const bags = input
  .slice(n + 1)
  .map(Number)
  .sort((a, b) => a - b);
const possible = new MaxHeap();

let answer = 0;
let j = 0;
for (let i = 0; i < k; i++) {
  while (j < n && bags[i] >= stones[j][0]) {
    possible.push(stones[j][1]);
    j++;
  }
  if (possible.size()) {
    answer += possible.pop();
  }
}

console.log(answer);

// https://algoroot.tistory.com/69
