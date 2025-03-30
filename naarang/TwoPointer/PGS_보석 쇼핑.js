function solution(gems) {
  var answer = [1, gems.length];
  const gemSize = new Set(gems).size;
  let gemMap = new Map();
  let minLength = Infinity;
  let left = 0;

  for (let right = 0; right < gems.length; right++) {
    const prev = gemMap.get(gems[right]) || 0;
    gemMap.set(gems[right], prev + 1);

    // 모든 보석이 포함되었다면 left를 증가시켜 최소 구간 찾기
    while (gemMap.size === gemSize) {
      if (right - left < minLength) {
        minLength = right - left;
        answer = [left + 1, right + 1];
      }

      gemMap.set(gems[left], gemMap.get(gems[left]) - 1);
      if (gemMap.get(gems[left]) === 0) gemMap.delete(gems[left]);
      left++;
    }
  }

  return answer;
}

// 투 포인터로 양쪽에서 줄여나가는 방식은 최소 길이를 보장하지 않음!
// 반례 :	["1", "1", "2", "2", "3", "3", "1", "2", "3"]
// 따라서 왼쪽 포인터를 이동시키면서 보석을 제거하고, 오른쪽 포인터를 이동시키면서 보석을 추가하여 모든 종류를 포함하는 최소 구간을 찾는 방식을 사용!
