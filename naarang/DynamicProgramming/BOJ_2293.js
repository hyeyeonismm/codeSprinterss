const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const [n, k] = input.shift().split(" ").map(Number);
const coins = input.map(Number);

let dp = new Array(k + 1).fill(0);
dp[0] = 1;

// 예를 들어 첫번째 동전만 사용하는 경우, 두번째 동전도 사용하는 경우.. 를 순차적으로 구해서 더해가야 한다!
for (let i = 0; i < n; i++) {
  for (let j = coins[i]; j <= k; j++) {
    dp[j] += dp[j - coins[i]];
  }
}

console.log(dp[k]);

// 중복을 어떻게 제거해..?
// 그림을 그려서 점화식을 도출할 줄 알아야하는 것 같다!
// 참고 블로그 : https://velog.io/@jxlhe46/%EB%B0%B1%EC%A4%80-2293%EB%B2%88.-%EB%8F%99%EC%A0%84-1-bfi120m5
// 근데 이거 node.js라는 이유로 메모리 초과 뜬다ㅠㅠ
