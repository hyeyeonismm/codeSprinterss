function solution(N, number) {
  var answer = 0;

  let dp = Array.from({ length: 9 }, () => new Set());

  for (let i = 1; i <= 8; i++) {
    dp[i].add(Number(String(N).repeat(i)));
    for (let j = 1; j < i; j++) {
      for (let num1 of dp[j]) {
        for (const num2 of dp[i - j]) {
          dp[i].add(num1 + num2);
          dp[i].add(num1 * num2);
          dp[i].add(num1 - num2);
          dp[i].add(Math.floor(num1 / num2));
        }
      }
    }
    if (dp[i].has(number)) {
      answer = i;
      break;
    }
  }

  if (!answer) answer = -1;
  return answer;
}

// dp로 각 index는 숫자를 사용한 개수, value는 Set으로 가능한 모든 값을 저장하기!
