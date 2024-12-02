const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const n = Number(input[0]);

let dp = Array.from({ length: n + 1 }, () => 0); // 해당 작업까지 완료했을 때 걸리는 최대 시간!

for (let i = 1; i <= n; i++) {
  const [hour, num, ...prev] = input[i].split(" ").map(Number);

  if (num > 0) {
    const prevHours = prev.map((value) => dp[value]);
    dp[i] = hour + Math.max(...prevHours);
  } else {
    dp[i] = hour;
  }
}

console.log(Math.max(...dp)); // 각 최대 시간 중에서 가장 최대 시간을 구해야 함!

// 일단 선행 작업 관계를 어떻게 저장해야 할까....

/*
K번 작업에 대해 선행 관계에 있는(즉, K번 작업을 시작하기 전에 반드시 먼저 완료되어야 하는) 작업들의 번호는 모두 1 이상 (K-1) 이하

-> 이게 뭔가 큰 힌트 같다!! 순차적으로 탐색해서 DP로 O(n)에 끝낼 수 있는 힌트!

1번 작업부터 순차적으로 탐색하면서 dp에 해당 작업까지 완료했을 때 걸리는 최대 시간을 저장한다!

*/
