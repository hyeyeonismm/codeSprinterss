const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
let stuffs = [];
for (let i = 1; i <= n; i++) {
  const [w, v] = input[i].split(" ").map(Number);
  stuffs.push([w, v]);
}

let dp = Array.from({ length: n + 1 }, () => new Array(k + 1).fill(0));

for (let i = 1; i <= n; i++) {
  const [weight, value] = stuffs[i - 1];
  for (let j = 1; j <= k; j++) {
    if (weight > j) {
      dp[i][j] = dp[i - 1][j];
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], value + dp[i - 1][j - weight]);
    }
  }
}

console.log(dp[n][k]);

// 배낭에 관한 문제 -> 냅색 알고리즘으로 풀이 가능!
// 최대이익[n][k]: 각 물건 차례일 때 가방의 용량별 최대 가치를 저장
/*
**물건 K의 무게 > 배낭 W 무게**

- **dp [K][W] = dp [K-1][W]**

**물건 K의 무게 <= 배낭 W 무게**

- **dp [K][W] = max(dp [K-1][W], K가치 + dp [K-1][W-K무게])**
*/
