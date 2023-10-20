const fatigue = {
  0: { diamond: 1, iron: 1, stone: 1 },
  1: { diamond: 5, iron: 1, stone: 1 },
  2: { diamond: 25, iron: 5, stone: 1 },
};

const getMineralGroups = (picks, minerals) => {
  const maxPicks = picks.reduce((prev, curr) => (prev += curr), 0) * 5;
  const mineralGroups = [];
  let mineralGroup = { diamond: 0, iron: 0, stone: 0 };

  minerals.slice(0, maxPicks).map((mineral, index) => {
    mineralGroup[mineral]++;

    if (index % 5 === 4 || index === minerals.length - 1) {
      mineralGroups.push(mineralGroup);
      mineralGroup = { diamond: 0, iron: 0, stone: 0 };
    }
  });

  mineralGroups.sort((a, b) => {
    if (a['diamond'] !== b['diamond']) {
      return b['diamond'] - a['diamond'];
    } else if (a['iron'] !== b['iron']) {
      return b['iron'] - a['iron'];
    }
    return b['stone'] - a['stone'];
  });

  return mineralGroups;
};

function solution(picks, minerals) {
  // 5개씩 잘라서 다이아 많은 순대로 정렬(같으면 철이 많은 순대로 정렬)
  const mineralGroups = getMineralGroups(picks, minerals);

  let mineralIndex = 0;
  let answer = 0;
  picks.forEach((pick, index) => {
    // 도구 개수만큼 반복
    for (let i = 0; i < pick; i++) {
      if (mineralGroups[mineralIndex]) {
        // 하나의 그룹 당
        Object.entries(mineralGroups[mineralIndex]).map(([mineral, count]) => {
          // 해당 광물 개수만큼 피로도 더하기
          for (let j = 0; j < count; j++) {
            answer += fatigue[index.toString()][mineral];
          }
        });
        mineralIndex++;
      }
    }
  });

  return answer;
}

console.log(
  solution(
    [0, 1, 1],
    [
      'diamond',
      'diamond',
      'diamond',
      'diamond',
      'diamond',
      'iron',
      'iron',
      'iron',
      'iron',
      'iron',
      'diamond',
    ]
  )
);
