const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const [n, k] = input.shift().split(" ").map(Number);
const coins = input.map(Number).sort((a, b) => a - b);

// 각 가치마다의 최소 동전 개수를 저장하기
let dp = new Array(k + 1).fill(Infinity);
dp[0] = 0;
for (let i = 1; i <= k; i++) {
  for (let coin of coins) {
    if (coin > i) break;

    if (coin === i) {
      dp[i] = 1;
      break;
    }

    if (dp[i - coin]) dp[i] = Math.min(dp[i], dp[i - coin] + 1);
  }
  if (dp[i] === Infinity) {
    dp[i] = 0;
  }
}

console.log(dp[k] || -1);

// 참고 블로그 : https://velog.io/@rhdmstj17/%EB%B0%B1%EC%A4%80-2294%EB%B2%88-%EB%8F%99%EC%A0%84-2-python-%EB%8B%A4%EC%9D%B4%EB%82%98%EB%AF%B9-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D

// 점화식을 생각해내는 것이 어려웠다ㅠ

// 그리고 만들수 없는 가치인 경우에 -1을 반환하기 위해 if (dp[i - coin]) 조건문을 추가했다.
