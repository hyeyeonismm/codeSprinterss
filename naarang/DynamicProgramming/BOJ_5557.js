const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const n = Number(input[0]);
let nums = input[1].split(" ").map(Number);

let dp = Array.from({ length: n }, () => new Array(21).fill(-1n));

dp[0][nums[0]] = 1n;

for (let i = 1; i < n - 1; i++) {
  const currentNum = nums[i];
  for (let j = 0; j <= 20; j++) {
    if (dp[i - 1][j] === -1n) continue;
    const prevCount = dp[i - 1][j];

    if (j - currentNum >= 0) dp[i][j - currentNum] !== -1n ? (dp[i][j - currentNum] += prevCount) : (dp[i][j - currentNum] = prevCount);
    if (j + currentNum <= 20) dp[i][j + currentNum] !== -1n ? (dp[i][j + currentNum] += prevCount) : (dp[i][j + currentNum] = prevCount);
  }
}

console.log(dp[n - 2][nums[n - 1]].toString());

// +, - 둘 중 선택하는 것!
// 모두 0 이상 20 이하
// 아 근데 2차원배열로 갱신해가야 함
// 0 ~ 20 : 가로, nums가 세로
// 이때 아예 경우의수가 없으면 -1로 표기함

// 등식의 개수 값의 범위가 2^63 - 1 이하이므로 BigInt를 사용해야 함!
