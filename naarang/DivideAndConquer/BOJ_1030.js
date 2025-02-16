const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const [s, N, K, R1, R2, C1, C2] = input[0].split(" ").map(Number);

let answer = Array.from({ length: R2 - R1 + 1 }, () => new Array(C2 - C1 + 1).fill(0));
// 1초 흐를 때마다 N^2씩 사각형의 개수가 증가함!
const splitRectangle = (startX, startY, size, isBlack) => {
  if (size === 1) {
    answer[startX - R1][startY - C1] = isBlack ? 1 : 0;
    return;
  }

  const nextSize = size / N;
  const fillStart = (N - K) / 2;

  // 쪼개기
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      const nextX = startX + nextSize * i;
      const nextY = startY + nextSize * j;
      if (nextX <= R2 && nextX + nextSize - 1 >= R1 && nextY <= C2 && nextY + nextSize - 1 >= C1) {
        if (isBlack) {
          splitRectangle(nextX, nextY, nextSize, true);
        } else if (fillStart <= i && fillStart + K > i && fillStart <= j && fillStart + K > j) {
          // K * K는 블랙으로 칠하기
          splitRectangle(nextX, nextY, nextSize, true);
        } else {
          splitRectangle(nextX, nextY, nextSize, false);
        }
      }
    }
  }
};

splitRectangle(0, 0, N ** s, false);

console.log(answer.map((value) => value.join("")).join("\n"));

// 실제 문제는 쪼개가지만 미리 각 칸들을 쪼갰다고 생각하고 접근함
/*

메모리 초과 발생! -> 실제로 출력할 범위 이외의 부분은 탐색할 필요가 없었다!

따라서 모든 칸을 배열에 저장할 필요 없이 매개변수로 블랙인지 아닌지를 탐색할 isBlack을 추가해서 판단하는 것으로 변경했다!

*/
