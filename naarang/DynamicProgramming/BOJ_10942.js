const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const n = Number(input[0]);

const nums = input[1].split(" ").map(Number);

let dp = Array.from({ length: n }, () => new Array(n).fill(0));

for (let i = n - 1; i >= 0; i--) {
  for (let j = i; j < n; j++) {
    if (i === j) {
      dp[i][j] = 1;
      continue;
    }

    if (i + 1 === j && nums[i] === nums[j]) {
      dp[i][j] = 1;
      continue;
    }

    if (nums[i] === nums[j] && dp[i + 1][j - 1]) dp[i][j] = 1;
  }
}

let answer = [];
for (let i = 3; i < input.length; i++) {
  let [start, end] = input[i].split(" ").map(Number);
  answer.push(dp[start - 1][end - 1]);
}

console.log(answer.join("\n"));

/*
2차원 배열로 만들어서 
세로 : 시작 인덱스
가로 : 종료 인덱스
회문 여부를 1, 0로 저장하기!
*/

/*
그렇다면 어떻게 회문을 판단할지가 어려웠다ㅠㅠ

참고 블로그 : https://4z7l.github.io/2021/04/07/algorithms-boj-10942.html

start ~ end까지가 회문일려면 start + 1 ~ end - 1도 회문이어야 된다는 점을 이용해야 했다!

따라서 nums[i] === nums[j] && dp[i + 1][j - 1] 이면 회문이 성립되었다!

*/
