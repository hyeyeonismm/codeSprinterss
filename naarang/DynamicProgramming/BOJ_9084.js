const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

let line = 0;
const t = Number(input[line++]);

const countAnswer = (n, coins, money) => {
  let dp = new Array(money + 1).fill(0);
  dp[0] = 1;

  for (let i = 0; i < n; i++) {
    for (let j = coins[i]; j <= money; j++) {
      dp[j] += dp[j - coins[i]];
    }
  }

  return dp[money];
};

let answer = [];

for (let i = 0; i < t; i++) {
  let n = Number(input[line++]);
  let coins = input[line++].split(" ").map(Number);
  let money = Number(input[line++]);

  answer.push(countAnswer(n, coins, money));
}

console.log(answer.join("\n"));

// 경우의 수를 저장해야 되는데... 1과 2를 음

// 동전 쪽 부분이 아직 이해가 덜 된 것 같다... 2293 동전1 문제랑 같은 건데 왜 못풀엇을까ㅠ

// dp[n]new = dp[n]prev + dp[n - 현재 동전값]
