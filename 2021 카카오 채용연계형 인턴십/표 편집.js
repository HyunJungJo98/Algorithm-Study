const findNextIndex = (linkedList, num, index, frontBack) => {
  let cnt = 0;
  let idx = index;

  if (num === 1 && linkedList[index][1] === null) {
    return linkedList[index][0];
  }

  while (cnt < num) {
    idx = linkedList[idx][frontBack];
    cnt++;
  }

  return idx;
};

const deleteReLinked = (linkedList, index) => {
  if (linkedList[index][0] === null) {
    linkedList[index + 1][0] = linkedList[index][0];
  } else if (linkedList[index][1] === null) {
    linkedList[index - 1][1] = null;
  } else {
    linkedList[index - 1][1] = linkedList[index][1];
    linkedList[index + 1][0] = linkedList[index][0];
  }
};

const undoReLinked = (linkedList, index, dic) => {
  let left = index - 1;
  let right = index + 1;

  while (dic[left] === 0) {
    left--;
  }

  if (left < 0) {
    linkedList[index][0] = null;
  } else {
    linkedList[index][0] = left;
  }

  while (dic[right] === 0) {
    right++;
  }

  if (right >= linkedList.length) {
    linkedList[index][1] = null;
  } else {
    linkedList[index][1] = right;
  }
};

function solution(n, k, cmd) {
  const linkedList = Array.from(Array(n), () => Array(2).fill(0));
  const stack = [];
  const dic = Array(n).fill(0);
  let index = k;

  for (let i = 0; i < n; i++) {
    dic[i] = 1;
    linkedList[i][0] = i - 1;
    linkedList[i][1] = i + 1;
    if (i === 0) {
      linkedList[i][0] = null;
    } else if (i === n - 1) {
      linkedList[i][1] = null;
    }
  }

  cmd.map((cmd) => {
    if (cmd[0] === 'D') {
      const num = +cmd.split(' ')[1];
      index = findNextIndex(linkedList, num, index, 1);
    } else if (cmd[0] === 'U') {
      const num = +cmd.split(' ')[1];
      index = findNextIndex(linkedList, num, index, 0);
    } else if (cmd[0] === 'C') {
      // 삭제된 인덱스 스택에 넣기
      stack.push(index);
      dic[index] = 0;
      // 삭제된 인덱스 앞, 뒤 연결 노드 변경
      deleteReLinked(linkedList, index);
      // 인덱스 변경
      index = findNextIndex(linkedList, 1, index, 1);
    } else {
      const deleted = stack.pop();
      dic[deleted] = 1;
      undoReLinked(linkedList, deleted, dic);
    }
  });

  return dic.map((key) => (key ? 'O' : 'X')).join('');
}

console.log(
  solution(8, 2, [
    'D 2',
    'C',
    'U 3',
    'C',
    'D 4',
    'C',
    'U 2',
    'Z',
    'Z',
    'U 1',
    'C',
  ])
);
