const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
let arr = [];

for (let i = 1; i < input.length; i++) {
  const line = input[i].split("").map(Number);
  arr.push(line);
}

let dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
let answer = 0;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    if (arr[i - 1][j - 1]) dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
    answer = Math.max(answer, dp[i][j]);
  }
}

console.log(answer * answer);

// 그림을 그려서 점화식을 찾아봤다!
/*
2차원 배열로 dp의 각 원소에 해당 칸으로 끝나는 정사각형 한 변의 최대 길이를 저장한다.

정사각형이어야 하므로 
해당 칸의 값이 1이면
dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
해당 칸의 값이 0이면
dp[i][j] = 0;

*/
