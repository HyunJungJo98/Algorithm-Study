function solution(people, limit) {
  let answer = 0;

  people.sort((a, b) => a - b);

  // 제일 큰 것과 제일 작은 것 더해서 limit 보다 작은지 보기
  let left = 0;
  let right = people.length - 1;

  while (left <= right) {
    console.log(left, right);
    // 같은 경우는 혼자 남은 경우 -> 혼자 타야 함
    if (left === right) {
      answer += 1;
      break;
    }
    if (people[left] + people[right] > limit) {
      // 제일 큰 것과 작은 것 더했는데도 크면 더 작은 걸 더할 게 없으므로
      // 제일 큰 건 혼자 타야 함 -> 제일 큰 걸 그 다음 큰 걸로 바꾸고 answer++
      right--;
    } else {
      // 두 명을 구명보트에 넣고 다음으로 작은 사람, 다음으로 큰 사람 비교
      left++;
      right--;
    }
    answer++;
  }

  return answer;
}

const people = [100, 500, 500, 900, 950];
const limit = 1000;

console.log(solution(people, limit));
