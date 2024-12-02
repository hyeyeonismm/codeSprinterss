const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const t = Number(input[0]);
const k = Number(input[1]);

let coins = [];
for (let i = 2; i <= k + 1; i++) {
  const [money, num] = input[i].split(" ").map(Number);

  coins.push([money, num]);
}

let dp = new Array(t + 1).fill(0);
dp[0] = 1;

for (let i = 0; i < k; i++) {
  const [money, num] = coins[i];
  for (let j = t; j >= money; j--) {
    for (let count = 1; count <= num; count++) {
      if (j - count * money < 0) break;
      dp[j] += dp[j - count * money];
    }
  }
}

console.log(dp[t]);

// 동전의 개수에 대한 제한만 추가된 것인데도 어려웠다ㅠ
// 작은 금액부터 순회하면 앞에서 갱신한 내용을 중복으로 반영할 수 있어서 큰 금액부터 순회해야 했다!
