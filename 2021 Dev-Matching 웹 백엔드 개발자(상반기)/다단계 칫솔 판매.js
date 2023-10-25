const shareProfits = (sellerIdx, profits, sell, graph, enroll) => {
  const sellerName = enroll[sellerIdx];
  // 1원 미만이면 그대로
  // 1원 이상이면 90%
  const newProfits =
    Math.floor(profits * 0.1) < 1
      ? profits
      : profits - Math.floor(profits * 0.1);
  const nextProfitx =
    Math.floor(profits * 0.1) < 1 ? 0 : Math.floor(profits * 0.1);

  sell[sellerName] += newProfits;

  // 부모가 없거나 더이상 분배할 금액이 없으면 return
  if (graph[sellerIdx] === '-' || nextProfitx === 0) {
    return;
  }

  shareProfits(graph[sellerIdx], nextProfitx, sell, graph, enroll);
};

function solution(enroll, referral, seller, amount) {
  const index = {};
  const sell = {};
  const graph = Array(enroll.length).fill(0);
  enroll.forEach((en, i) => {
    index[en] = i;
    sell[en] = 0;
  });
  referral.forEach((ref, i) => {
    if (ref === '-') {
      graph[i] = ref;
      return;
    }
    graph[i] = index[ref];
  });

  seller.forEach((seller, i) => {
    const sellerIdx = index[seller];
    const profits = amount[i] * 100;

    shareProfits(sellerIdx, profits, sell, graph, enroll);
  });

  return enroll.map((en) => sell[en]);
}

console.log(
  solution(
    ['john', 'mary', 'edward', 'sam', 'emily', 'jaimie', 'tod', 'young'],
    ['-', '-', 'mary', 'edward', 'mary', 'mary', 'jaimie', 'edward'],
    ['young', 'john', 'tod', 'emily', 'mary'],
    [12, 4, 2, 5, 10]
  )
);
