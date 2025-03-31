function solution(stones, k) {
  var answer = 0;

  let left = 1;
  let right = 200000000; // Math.max(...stones)로 했다가 시간초과! Math 메소드 사용도 주의하자

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let jump = 0;

    for (let stone of stones) {
      if (stone - mid <= 0) {
        jump++;
        if (jump >= k) break;
      } else {
        jump = 0;
      }
    }

    if (jump >= k) {
      right = mid - 1;
    } else {
      left = mid + 1;
      answer = left;
    }
  }

  return answer;
}

// 근데 stones 배열의 각 원소들의 값이 200000000 이하인 자연수이므로 단순 for문으로 하면 안된다!
// 가장 먼저 k개의 0개가 나오는 구간(k개의 값 중에서 최대값이 가장 작은 곳!)을 찾아서 해당 구간의 최대값을 구하기 -> 최대값 - 1이 정답!
// 슬라이딩 윈도우 이용하기 -> 라고 생각해도 숫자가 너무 커서 이진탐색이 필요했다..

// 돌의 값에 초점이 아니라 사람 인원수에 따라 이진탐색을 진행하기!
