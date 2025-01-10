const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const [h, w] = input[0].split(" ").map(Number);
const blocks = input[1].split(" ").map(Number);

let answer = 0;

for (let i = 0; i <= h; i++) {
  // 아랫줄부터 한 줄씩 체크하면서 물이 고일 수 있는지 체크
  let currentWidth = 0;
  let isWater = false; // 물이 고일 수 있는지!
  for (let j = 0; j < w; j++) {
    if (blocks[j] > i) {
      if (isWater) {
        // 물이 고이는 종료점
        answer += currentWidth;
        currentWidth = 0;
      } else {
        // 물이 고이는 시작점
        isWater = true;
      }
    } else {
      if (isWater) currentWidth++;
    }
  }
}

console.log(answer);

/*

기준을 어떻게 잡을까?

처음에는 높은 기둥들을 찾으려고 했는데 

그게 아니라 아랫칸 라인부터 하나의 가로줄씩 순회하면서 물이 고일수 있으면 추가하는 것으로 생각!
*/
