// 부모 찾기
const getParent = (parents, node) => {
  if (parents[node] === node) {
    return node;
  }
  // 트리를 타고 부모를 찾아올라감
  // 최상위 부모를 넣어줌
  parents[node] = getParent(parents, parents[node]);
  return parents[node];
};

// 부모가 같은지 확인
const find = (parents, node1, node2) => {
  //   console.log(getParent(parents, node1), getParent(parents, node2));
  if (getParent(parents, node1) === getParent(parents, node2)) {
    return true;
  }
  return false;
};

// 부모 합치기
const union = (parents, node1, node2) => {
  const parent1 = getParent(parents, node1);
  const parent2 = getParent(parents, node2);

  if (parent1 > parent2) {
    parents[parent1] = parent2;
  } else {
    parents[parent2] = parent1;
  }
  //   console.log(parents);
};

function solution(n, costs) {
  let answer = 0;
  const parent = Array(n)
    .fill()
    .map((_, i) => i);

  costs.sort((a, b) => a[2] - b[2]);

  for (let i = 0; i < costs.length; i++) {
    // console.log('node1, node2, cost', costs[i]);
    if (!find(parent, costs[i][0], costs[i][1])) {
      answer += costs[i][2];
      union(parent, costs[i][0], costs[i][1]);
    }
  }

  return answer;
}

console.log(
  solution(4, [
    [0, 1, 5],
    [1, 2, 3],
    [2, 3, 3],
    [1, 3, 2],
    [0, 3, 4],
  ])
);
