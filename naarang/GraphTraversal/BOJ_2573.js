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

const melting = () => {
  let visitied = Array.from({ length: N }, () => new Array(M).fill(false));
  let queue = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] > 0) queue.push([i, j]);
    }
  }

  if (queue.length === 0) return false; // 더 이상 녹을 것이 없으면!

  for (let q of queue) {
    const [x, y] = q;
    visitied[x][y] = true;

    let count = 0;
    for (let [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx >= 0 && nx < N && ny >= 0 && ny < M && !visitied[nx][ny] && board[nx][ny] === 0) {
        count++;
      }
    }

    if (board[x][y] - count > 0) board[x][y] -= count;
    else board[x][y] = 0;
  }

  return true;
};

const checkNum = () => {
  let visitied = Array.from({ length: N }, () => new Array(M).fill(false));

  const bfs = (initialX, initialY) => {
    let index = 0;
    let queue = [[initialX, initialY]];
    visitied[initialX][initialY] = true;

    while (queue.length > index) {
      const [x, y] = queue[index++];

      for (let [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;

        if (nx >= 0 && nx < N && ny >= 0 && ny < M && !visitied[nx][ny] && board[nx][ny] > 0) {
          visitied[nx][ny] = true;
          queue.push([nx, ny]);
        }
      }
    }
  };

  let count = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] > 0 && !visitied[i][j]) {
        count++;
        bfs(i, j);
      }
      if (count >= 2) return true;
    }
  }
};

let answer = 1;
while (true) {
  const isAvailable = melting();
  if (!isAvailable) {
    console.log(0);
    return;
  }

  const result = checkNum();

  if (result) {
    console.log(answer);
    return;
  }

  answer++;
}

/*


한 덩어리의 빙산이 두 덩어리로 분리되는 것을 어떻게 판단하지? 이것도 BFS로!

1. 1년동안 녹이고
2 섬이 2개 이상인지를 체크

구현 문제 같았다! 차분히 조건을 해결해나가면 됐었고 시간초과 고민했는데 그냥 for문 돌려도 괜찮았다


*/
