const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

let bingoBoard = {}; // 빙고판 숫자
for (let i = 0; i < 5; i++) {
  const nums = input[i].split(" ").map(Number);

  nums.forEach((value, j) => {
    bingoBoard[value] = [i, j];
  });
}

let bingoCheck = Array.from({ length: 5 }, () => new Array(5).fill(false)); // 불렸는지 체크
let bingo = 0; // 현재 빙고 개수
const checkBingo = (num) => {
  const [x, y] = bingoBoard[num];

  bingoCheck[x][y] = true;
  let isBingo = true;

  // \ 방향 대각선
  if (x === y) {
    isBingo = true;
    for (let i = 0; i < 5; i++) {
      if (!bingoCheck[i][i]) {
        isBingo = false;
        break;
      }
    }

    if (isBingo) bingo++;
  }

  // / 방향 대각선
  if (x + y === 4) {
    isBingo = true;
    for (let i = 0; i < 5; i++) {
      if (!bingoCheck[i][4 - i]) {
        isBingo = false;
        break;
      }
    }

    if (isBingo) bingo++;
  }

  // 세로
  isBingo = true;
  for (let i = 0; i < 5; i++) {
    if (!bingoCheck[i][y]) {
      isBingo = false;
      break;
    }
  }

  if (isBingo) bingo++;

  // 가로
  isBingo = true;
  for (let i = 0; i < 5; i++) {
    if (!bingoCheck[x][i]) {
      isBingo = false;
      break;
    }
  }

  if (isBingo) bingo++;

  return bingo >= 3; // bingo === 3으로 해서 틀렸었음!
};

let count = 0;
for (let i = 5; i < 10; i++) {
  const nums = input[i].split(" ").map(Number);

  for (let num of nums) {
    count++;
    const result = checkBingo(num);
    if (result) {
      console.log(count);
      return;
    }
  }
}

/*
숫자가 불렸을 때 빙고 판에서 빠르게 찾기 위해서 dict를 사용해서 key - 숫자, value - 좌표값 을 저장

숫자가 불리면 true로 저장할 2차원 배열도 별도로 선언해서 빙고 개수를 검사함

어렵지는 않았지만 더 깔끔하게 푸는 방법들이 많다!
*/
