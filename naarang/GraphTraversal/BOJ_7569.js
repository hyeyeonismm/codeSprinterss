const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

let inputIndex = 0;
const [M, N, H] = input[inputIndex++].split(" ").map(Number);

let board = [];

for (let i = 0; i < H; i++) {
  let xy = [];
  for (let i = 0; i < N; i++) {
    xy.push(input[inputIndex++].split(" ").map(Number));
  }
  board.push(xy);
}

const directions = [
  [-1, 0, 0],
  [1, 0, 0],
  [0, -1, 0],
  [0, 1, 0],
  [0, 0, -1],
  [0, 0, 1],
];

const bfs = () => {
  let unripped = 0;
  let queue = []; // [z, x, y, day]
  let index = 0; // queue를 탐색할 index

  for (let i = 0; i < H; i++) {
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < M; k++) {
        if (board[i][j][k] === 0) unripped++;
        else if (board[i][j][k] === 1) queue.push([i, j, k, 0]);
      }
    }
  }

  if (unripped === 0) return 0;

  while (index < queue.length) {
    const [z, x, y, day] = queue[index++];

    for (let [dz, dx, dy] of directions) {
      const nz = z + dz;
      const nx = x + dx;
      const ny = y + dy;

      if (nz >= 0 && nz < H && nx >= 0 && nx < N && ny >= 0 && ny < M && board[nz][nx][ny] === 0) {
        queue.push([nz, nx, ny, day + 1]);
        board[nz][nx][ny] = 1;
        unripped--;
      }
    }
  }

  if (unripped > 0) return -1;

  const [, , , day] = queue.pop();
  return day;
};

console.log(bfs());

// 7576 토마토 문제와 완전 똑같은 로직으로 풀었다! 2차원 배열 -> 3차원 배열로 확장한 것뿐!
