const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const first = input[0].split("");
const firstLength = first.length;
const second = input[1].split("");
const secondLength = second.length;

let dp = Array.from({ length: firstLength + 1 }, () => new Array(secondLength + 1).fill(0));

for (let i = 1; i <= firstLength; i++) {
  for (let j = 1; j <= secondLength; j++) {
    if (first[i - 1] === second[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
    } else {
      dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
    }
  }
}

console.log(dp[firstLength][secondLength]);

// LCS 알고리즘 이용 문제
/*
LCS 2차원 배열을 이용하여 두 문자열을 행, 열에 매칭

2중 for문으로 문자열A, 문자열B의 한글자씩 비교

만약, 두 문자가 다르다면 LCS[i - 1][j]와 LCS[i][j - 1] 중에 큰값을 표시

만약, 두 문자가 같다면 LCS[i - 1][j - 1] 값을 찾아 +1
*/
