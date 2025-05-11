const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

let n = Number(input[0]);
let stones = {};

// 이거 예외처리 안해줘서 계속 찾았다ㅠㅠㅠ 다음부터는 예외처리를 꼼꼼히 하자!!
if (n === 1) {
  console.log(0);
  return;
}

for (let i = 1; i < input.length - 1; i++) {
  const [smallJump, bigJump] = input[i].split(" ").map(Number);
  stones[i] = { smallJump, bigJump };
}

let k = Number(input.pop());

let dp = new Array(n + 1).fill(0);

dp[2] = stones[1].smallJump;

// 일단 매우 큰 점프 고려 안하기
for (let i = 3; i <= n; i++) {
  dp[i] = Math.min(dp[i - 1] + stones[i - 1].smallJump, dp[i - 2] + stones[i - 2].bigJump);
}

// 가능한 모든 곳에서 매우 큰 점프 고려해서 다시 계산하기
// 최소값이 아닌 것 같더라도 끝까지 구해봐야된다 : new_dp[i] = Math.min(veryBigJump, new_dp[i])를 안해도 된다!

let answer = dp[n];
for (let i = 4; i <= n; i++) {
  let new_dp = [...dp];
  const veryBigJump = dp[i - 3] + k;
  new_dp[i] = veryBigJump;
  for (let j = i + 1; j <= n; j++) {
    new_dp[j] = Math.min(new_dp[j - 1] + stones[j - 1].smallJump, new_dp[j - 2] + stones[j - 2].bigJump);
  }
  answer = Math.min(new_dp[n], answer);
}

console.log(answer);
