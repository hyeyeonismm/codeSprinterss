const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

let sudoku = [];
for (let line of input) {
  sudoku.push(line.split(" ").map(Number));
}

// 0인 부분 찾기
let empty = [];
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (sudoku[i][j] === 0) empty.push([i, j]);
  }
}

let findAnswer = false; // 정답을 찾으면 그만 탐색하도록 해야 했음!

const dfs = (depth) => {
  if (findAnswer) return;

  if (depth === empty.length) {
    console.log(sudoku.map((line) => line.join(" ")).join("\n"));
    findAnswer = true;
    return;
  }

  const [x, y] = empty[depth];

  let nums = new Array(9).fill(true);

  // 가로 확인
  for (let i = 0; i < 9; i++) {
    if (sudoku[x][i] !== 0) nums[sudoku[x][i] - 1] = false;
  }

  // 세로 확인
  for (let i = 0; i < 9; i++) {
    if (sudoku[i][y] !== 0) nums[sudoku[i][y] - 1] = false;
  }

  // 3x3 확인 : 012 345 678 -> / 3 했을 때 몫이 0, 1, 2로 구분!
  const xIndex = Math.floor(x / 3) * 3;
  const yIndex = Math.floor(y / 3) * 3;

  for (let i = xIndex; i < xIndex + 3; i++) {
    for (let j = yIndex; j < yIndex + 3; j++) {
      if (sudoku[i][j] !== 0) nums[sudoku[i][j] - 1] = false;
    }
  }

  for (let i = 0; i < 9; i++) {
    if (!nums[i]) continue;
    sudoku[x][y] = i + 1;
    dfs(depth + 1);
    sudoku[x][y] = 0;
  }
};

dfs(0);

/*

답을 찾은 다음에도 단순히 return만 했더니 계속 탐색이 진행되었다!

정답을 찾은 이후에 정답을 출력하고 불필요한 탐색은 없애는 부분을 신경써야함


*/
