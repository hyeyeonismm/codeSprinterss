function solution(triangle) {
  var answer = 0;
  let bottomTriangleLength = triangle[triangle.length - 1].length;
  let dp = new Array(bottomTriangleLength).fill(0);
  dp[0] = triangle[0][0];

  for (let i = 1; i < triangle.length; i++) {
    const prev = [...dp];

    for (let j = 0; j < i; j++) {
      dp[j] = Math.max(dp[j], prev[j] + triangle[i][j]);
      dp[j + 1] = Math.max(dp[j + 1], prev[j] + triangle[i][j + 1]);
    }
  }

  answer = Math.max(...dp);

  return answer;
}
