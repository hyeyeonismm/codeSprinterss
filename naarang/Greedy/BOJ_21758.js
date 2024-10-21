const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

// 아.. 이거 예전에 풀려다 포기한 문제였다..ㅠ
let num = parseInt(input[0]);
const honeySpots = input[1].split(" ").map(Number);

// 모든 경우에 전체 합을 구해놓는 것이 좋았다!
let sum = new Array(num).fill(0);
sum[0] = honeySpots[0];
for (let i = 1; i < num; i++) {
  sum[i] = sum[i - 1] + honeySpots[i];
}

let answer = 0; // 최대값

for (let i = 1; i < num - 1; i++) {
  const bee1 = sum[i - 1];
  const bee2 = sum[num - 2] - honeySpots[i];
  const totalHoney = bee1 + bee2;
  answer = Math.max(totalHoney, answer);
}

for (let i = 1; i < num - 1; i++) {
  const bee1 = sum[i] - sum[0];
  const bee2 = sum[num - 2] - sum[i - 1];
  const totalHoney = bee1 + bee2;
  answer = Math.max(totalHoney, answer);
}

for (let i = 1; i < num - 1; i++) {
  const bee1 = sum[num - 1] - honeySpots[i] - sum[0];
  const bee2 = sum[num - 1] - sum[i];
  const totalHoney = bee1 + bee2;
  answer = Math.max(totalHoney, answer);
}

console.log(answer);

// 모든 경우를 해볼 수는 없으니 케이스를 나누는 게 가장 중요했다!!
// 참고 블로그 : https://velog.io/@ywc8851/%EB%B0%B1%EC%A4%80-21758-%EA%BF%80-%EB%94%B0%EA%B8%B0-javascript

/*
케이스는 크게 3가지로!

1. 꿀통 ~ 벌 ~ 벌 : 첫번째 벌 이동
2. 벌 ~ 꿀통 ~ 벌 : 꿀통 이동
3. 벌 ~ 벌 ~ 꿀통 : 두번째 벌 이동


그리고 시간 초과가 발생했는데 반복문으로 그때그때 구간의 합을 구하는 것보다 dp 하는 것처럼 모든 부분에서의 합을 구해놓고 조합해서 구간별로의 합을 구하는 것이 빨랐다!
*/
