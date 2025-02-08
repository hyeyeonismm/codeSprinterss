const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

let board = [];

for (let i = 1; i <= N; i++) {
  const line = input[i].split(" ").map(Number);
  board.push(line);
}

const directions = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

let answer = 0;
let visited = Array.from({ length: N }, () => new Array(M).fill(false));

const bfs = (x, y, count, sum) => {
  if (count === 4) {
    answer = Math.max(answer, sum + board[x][y]);
    return;
  }

  for (let [dx, dy] of directions) {
    const nx = x + dx;
    const ny = y + dy;

    if (nx >= 0 && nx < N && ny >= 0 && ny < M && !visited[nx][ny]) {
      visited[nx][ny] = true;
      bfs(nx, ny, count + 1, sum + board[x][y]);
      visited[nx][ny] = false;
    }
  }
};

// ㅗ 모양
const checkAdditionalCase = (x, y) => {
  let nums = [];
  let sum = board[x][y];
  for (let [dx, dy] of directions) {
    const nx = x + dx;
    const ny = y + dy;

    if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
      nums.push(board[nx][ny]);
      sum += board[nx][ny];
    }
  }

  if (nums.length <= 2) return;

  if (nums.length === 3) {
    answer = Math.max(answer, sum);
  } else if (nums.length === 4) {
    answer = Math.max(answer, sum - Math.min(...nums));
  }
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    visited[i][j] = true;
    bfs(i, j, 1, 0);
    visited[i][j] = false;
    checkAdditionalCase(i, j);
  }
}

console.log(answer);

/*

재귀적으로 탐색할 때 visited 처리에 주의하자

*/
