const setTree = (n1, n2, tree) => {
  const [x1, y1, node1] = n1;
  const [x2, y2, node2] = n2;
  // 비교대상(처음엔 루트)보다 작으면 왼쪽으로
  if (x2 < x1) {
    // 비교대상의 왼쪽 노드가 없으면 왼쪽 노드로 만들기
    if (tree[node1][0] === null) {
      tree[node1][0] = n2;
    } else {
      // 왼쪽 노드가 있으면 그 노드와 또 비교
      setTree(tree[node1][0], n2, tree);
    }
  } else {
    // 비교대상의 오른쪽 노드가 없으면 오른쪽 노드로 만들기
    if (tree[node1][1] === null) {
      tree[node1][1] = n2;
    } else {
      // 오른쪽 노드가 이미 있으면 그 노드와 또 비교
      setTree(tree[node1][1], n2, tree);
    }
  }
};

const setPre = (tree, rootNode, pre) => {
  pre.push(rootNode);
  if (tree[rootNode][0] !== null) {
    setPre(tree, tree[rootNode][0][2], pre);
  }
  if (tree[rootNode][1] !== null) {
    setPre(tree, tree[rootNode][1][2], pre);
  }
};

const setPost = (tree, rootNode, post) => {
  if (tree[rootNode][0] !== null) {
    setPost(tree, tree[rootNode][0][2], post);
  }
  if (tree[rootNode][1] !== null) {
    setPost(tree, tree[rootNode][1][2], post);
  }
  post.push(rootNode);
};

function solution(nodeinfo) {
  let answer = [[]];

  const tree = Array.from(Array(nodeinfo.length + 1), () =>
    Array(2).fill(null)
  );
  const nodeLen = nodeinfo.length;
  const sorted = nodeinfo
    .map(([x, y], node) => [x, y, node + 1])
    .sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] - b[0];
      }
      return b[1] - a[1];
    });

  for (let i = 1; i < nodeLen; i++) {
    setTree(sorted[0], sorted[i], tree);
  }

  const pre = [];
  const post = [];

  setPre(tree, sorted[0][2], pre);
  setPost(tree, sorted[0][2], post);

  answer = [pre, post]

  return answer;
}

console.log(
  solution([
    [5, 3],
    [11, 5],
    [13, 3],
    [3, 5],
    [6, 1],
    [1, 3],
    [8, 6],
    [7, 2],
    [2, 2],
  ])
);
