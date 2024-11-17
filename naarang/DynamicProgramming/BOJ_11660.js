const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

let table = [];
for (let i = 1; i <= n; i++) {
  const nums = input[i].split(" ").map(Number);
  table.push([...nums]);
}

let dp = Array.from({ length: n }, () => new Array(n).fill(0));

// (0,0)을 기준으로 구간별 합 구하기
dp[0][0] = table[0][0];
for (let i = 1; i < n; i++) {
  dp[0][i] = dp[0][i - 1] + table[0][i];
  dp[i][0] = dp[i - 1][0] + table[i][0];
}

for (let i = 1; i < n; i++) {
  for (let j = 1; j < n; j++) {
    dp[i][j] = dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1] + table[i][j];
  }
}

// 각 범위의 값 구하기 -> 이때 index 범위가 유효한지 확인 필수!
let answer = [];
for (let i = n + 1; i < input.length; i++) {
  const [x1, y1, x2, y2] = input[i].split(" ").map(Number); // 1씩 빼기 인덱스이므로!

  let result = dp[x2 - 1][y2 - 1];
  if (x1 - 1 - 1 >= 0) result -= dp[x1 - 1 - 1][y2 - 1];
  if (y1 - 1 - 1 >= 0) result -= dp[x2 - 1][y1 - 1 - 1];
  if (x1 - 1 - 1 >= 0 && y1 - 1 - 1 >= 0) result += dp[x1 - 1 - 1][y1 - 1 - 1];

  answer.push(result);
}

console.log(answer.join("\n"));
