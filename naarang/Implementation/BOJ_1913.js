const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const n = Number(input[0]);
const target = Number(input[1]);
let targetX = 0;
let targetY = 0;

const board = Array.from({ length: n }, () => new Array(n).fill(0));

let x = Math.floor(n / 2);
let y = Math.floor(n / 2);
let num = 1;

const drawBox = (size) => {
  if (size === 1) {
    board[x--][y] = num++;
    return;
  }

  // 오른쪽
  for (let i = 0; i < size - 2; i++) {
    board[x][y++] = num++;
  }

  // 아래
  for (let i = 0; i < size - 1; i++) {
    board[x++][y] = num++;
  }

  // 왼쪽
  for (let i = 0; i < size - 1; i++) {
    board[x][y--] = num++;
  }

  // 위
  for (let i = 0; i < size; i++) {
    board[x--][y] = num++;
  }
};

for (let i = 1; i <= Math.floor(n / 2) + 1; i++) {
  drawBox(2 * (i - 1) + 1);
}

const findTarget = () => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === target) {
        targetX = i + 1;
        targetY = j + 1;
        return;
      }
    }
  }
};
findTarget();

console.log(board.map((value) => value.join(" ")).join("\n"));
console.log(targetX, targetY);
