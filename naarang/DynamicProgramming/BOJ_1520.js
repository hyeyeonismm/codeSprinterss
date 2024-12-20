const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
let map = [];

for (let i = 1; i <= n; i++) {
  const line = input[i].split(" ").map(Number);
  map.push(line);
}

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

const dp = Array.from({ length: n }, () => new Array(m).fill(-1)); // 방문한 적 없으면 -1로!

const dfs = (x, y) => {
  if (dp[x][y] !== -1) return dp[x][y];

  let count = 0;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && nx < n && ny >= 0 && ny < m && map[x][y] > map[nx][ny]) count += dfs(nx, ny);
  }

  dp[x][y] = count;
  return count;
};

dp[n - 1][m - 1] = 1; // 맨 아래 오른쪽 칸은 목적지이므로 이 칸에서 목적지로 가는 경로는 1개!

console.log(dfs(0, 0));

/*

처음에 문제를 봤을 때 이게 DP가 아니라 그래프 탐색 같은데라는 생각이 들었다.

그냥 DFS로 상하좌우로 탐색을 하면 중복된 탐색이 많아져서 DP로 메모이제이션을 해서 DFS + DP로 풀어야 한다!

dp[x][y]는 (x, y)에서 목적지까지의 가능한 경로 수를 저장 + dfs에서 -1이 아니면 방문한 것으로 체크


이거는 나중에 다시 풀어봐야겠다ㅠ

*/
