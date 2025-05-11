const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const S = Number(input[0]);

let answer = 0;
let sum = 0;
let num = 1;

while (num <= S) {
  sum += num;

  if (num < S - sum) {
    answer++;
    num++;
  } else {
    answer++;
    break;
  }
}

console.log(answer);

// 서로 모두 다른 숫자들의 합이므로  1, 2, 3, ... 으로 더할 수 있을만큼 최대한 더하기!
// binary search가 아니라 그리디 문제였다!
