const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

let board = [];

for (let line of input) {
  board.push(line.split(" ").map(Number));
}

const checkBottom = (x, y) => {
  const first = board[x][y];

  for (let k = 1; k < 5; k++) {
    if (first !== board[x + k][y]) return false;
  }

  if (x > 0 && board[x - 1][y] === first) return false;
  if (x !== 14 && board[x + 5][y] === first) return false;

  return true;
};

const checkRight = (x, y) => {
  const first = board[x][y];

  for (let k = 1; k < 5; k++) {
    if (first !== board[x][y + k]) return false;
  }

  if (y > 0 && board[x][y - 1] === first) return false;
  if (y !== 14 && board[x][y + 5] === first) return false;

  return true;
};

const checkRightBottom = (x, y) => {
  const first = board[x][y];

  for (let k = 1; k < 5; k++) {
    if (first !== board[x + k][y + k]) return false;
  }

  if (x > 0 && y > 0 && board[x - 1][y - 1] === first) return false;
  if (x !== 14 && y !== 14 && board[x + 5][y + 5] === first) return false;

  return true;
};

const checkRightTop = (x, y) => {
  const first = board[x][y];

  for (let k = 1; k < 5; k++) {
    if (first !== board[x - k][y + k]) return false;
  }

  if (x < 18 && y > 0 && board[x + 1][y - 1] === first) return false;
  if (x !== 4 && y !== 14 && board[x - 5][y + 5] === first) return false;

  return true;
};

// 아래로 5개, 오른쪽 위로 대각선으로 5개, 오른쪽으로 5개, 오른쪽 아래 대각선으로 5개가 존재하는지 확인하자!
for (let i = 0; i < 19; i++) {
  for (let j = 0; j < 19; j++) {
    if (board[i][j] === 0) continue;

    // 아래로 5개
    if (i <= 14 && checkBottom(i, j)) {
      console.log(board[i][j]);
      console.log(i + 1, j + 1);
      return;
    }

    // 오른쪽으로 5
    if (j <= 14 && checkRight(i, j)) {
      console.log(board[i][j]);
      console.log(i + 1, j + 1);
      return;
    }

    // 오른쪽 위로 대각선으로 5개
    if (i >= 4 && j <= 14 && checkRightTop(i, j)) {
      console.log(board[i][j]);
      console.log(i + 1, j + 1);
      return;
    }

    // 오른쪽 아래 대각선으로 5개
    if (i <= 14 && j <= 14 && checkRightBottom(i, j)) {
      console.log(board[i][j]);
      console.log(i + 1, j + 1);
      return;
    }
  }
}

console.log(0);

/* 
2중 for문으로 각 원소가 시작점인 경우 4가지를 확인한다.

아래로 5개, 오른쪽 위로 대각선으로 5개, 오른쪽으로 5개, 오른쪽 아래 대각선으로 5개가 존재하는지 확인

딱 5개인 것을 검사해야하는데 방향을 한쪽만 검사하는게 아니라 양쪽을 검사해야 함!
*/
