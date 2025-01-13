const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const [R, C, N] = input[0].split(" ").map(Number);

let board = [];
let time = 2; // 현재의 초

for (let i = 1; i <= R; i++) {
  const line = input[i].split("");
  board.push(line.map((value) => (value === "." ? 0 : 3)));
}

const addBomb = () => {
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (board[i][j] === 0) board[i][j] = time + 3;
    }
  }
};

const bombExplosion = () => {
  // 동시에 터지게 만들어야 함! 따라서 좌표를 받아서 한번에 처리
  let bombList = [];

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (board[i][j] <= time) bombList.push([i, j]);
    }
  }

  bombList.forEach((bomb) => {
    const [x, y] = bomb;

    board[x][y] = 0;
    if (x - 1 >= 0) board[x - 1][y] = 0;
    if (x + 1 < R) board[x + 1][y] = 0;
    if (y - 1 >= 0) board[x][y - 1] = 0;
    if (y + 1 < C) board[x][y + 1] = 0;
  });
};

while (time <= N) {
  if (time % 2 === 0) {
    // 빈 칸에 폭탄 설치
    addBomb();
  } else {
    // 폭탄 폭발
    bombExplosion();
  }
  time++;
}

console.log(board.map((line) => line.map((value) => (value === 0 ? "." : "O")).join("")).join("\n"));

/*


언제 터져야하는지를 저장하자! -> 현재 초에서 3초후로!





*/
