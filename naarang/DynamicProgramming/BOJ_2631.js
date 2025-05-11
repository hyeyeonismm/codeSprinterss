const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const n = Number(input[0]);

let students = [];
for (let i = 1; i <= n; i++) {
  students.push(Number(input[i]));
}

let dp = Array.from({ length: n }, () => 1);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (students[i] > students[j]) dp[i] = Math.max(dp[i], dp[j] + 1);
  }
}

console.log(n - Math.max(...dp));

// 이게 어떻게 DP? 자리를 옮길까 말까를 고민해서 그런가...

/*

자리를 바꾸는 순서는 상관이 없다! 어떤 거를 바꿀지를 고르면 된다
이때 바꿀지 선택하지 않은 것들이 오름차순으로 정렬되어 있으면 된다

-> 그렇다면 학생들 중에서 이미 오름차순인 최대 부분 수열의 길이를 구하면 해당 길이가 바꾸지 않아도 되는 학생 수이다.

LIS 알고리즘(최장 증가 수열)을 이용해서 최대 부분 수열의 길이를 구하면 된다!

*/
