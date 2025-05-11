const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const n = Number(input[0]);
let answer = Array.from({ length: 1 + 4 * (n - 1) }, () => new Array(1 + 4 * (n - 1)).fill(" "));

const drawStar = (x, y, num) => {
  if (num === 1) {
    answer[x][y] = "*";
    return;
  }

  let size = 1 + 4 * (num - 1);

  // 사각형의 상, 하
  for (let j = y; j < y + size; j++) {
    answer[x][j] = "*";
    answer[x + size - 1][j] = "*";
  }

  // 사각형의 좌변, 우변
  for (let i = x; i < x + size; i++) {
    answer[i][y] = "*";
    answer[i][y + size - 1] = "*";
  }
};

let x = 0;
let y = 0;
for (let i = n; i > 0; i--) {
  drawStar(x, y, i);
  x += 2;
  y += 2;
}

console.log(answer.map((line) => line.join("")).join("\n"));

/*

별 찍기 규칙을 찾아보기

별 개수가 n개라면

박스 크기 :
- 한 변의 길이 : 1, 5, 9, 13 -> 1 + 4(n - 1) 개

점점 사각형으로 감싸는 패턴이므로 재귀적으로 접근하는 것을 생각하는 것이 중요했다!

n = 1일 때만 

"*"

그 이후부터는 다음처럼 감싸는 사각형이 그려진다.
"
*****
*   *
*   *
*   *
*****
"
*/
