function solution(m, n, puddles) {
  var answer = 0;
  // 오른쪽과 아래로만 이동하므로 dp로 가능
  let dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  dp[1][1] = 1;

  const puddleSet = new Set(puddles.map(([x, y]) => `${y},${x}`));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (i === 1 && j === 1) continue;
      if (puddleSet.has(`${i},${j}`)) continue;

      if (dp[i - 1][j] > 0) dp[i][j] = (dp[i - 1][j] + dp[i][j]) % 1000000007;
      if (dp[i][j - 1] > 0) dp[i][j] = (dp[i][j - 1] + dp[i][j]) % 1000000007;
    }
  }

  return dp[n][m] % 1000000007;
}
