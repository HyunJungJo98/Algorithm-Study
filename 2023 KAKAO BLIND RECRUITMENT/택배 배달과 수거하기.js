function solution(cap, n, deliveries, pickups) {
  let answer = 0;

  while (deliveries.length || pickups.length) {
    while (deliveries.length && !deliveries[deliveries.length - 1]) {
      deliveries.pop();
    }
    while (pickups.length && !pickups[pickups.length - 1]) {
      pickups.pop();
    }

    answer += Math.max(deliveries.length, pickups.length) * 2;

    let dTarget = 0;
    while (deliveries.length) {
      const lastTarget = deliveries.pop();

      if (dTarget + lastTarget <= cap) {
        dTarget += lastTarget;
      } else {
        deliveries.push(dTarget + lastTarget - cap);
        break;
      }
    }

    let pTarget = 0;
    while (pickups.length) {
      const lastTarget = pickups.pop();

      if (pTarget + lastTarget <= cap) {
        pTarget += lastTarget;
      } else {
        pickups.push(pTarget + lastTarget - cap);
        break;
      }
    }
  }

  return answer;
}

console.log(solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0]));
