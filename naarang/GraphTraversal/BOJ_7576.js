const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const [M, N] = input[0].split(" ").map(Number);
let board = [];
const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

for (let i = 1; i <= N; i++) {
  const line = input[i].split(" ").map(Number);
  board.push(line);
}

const bfs = () => {
  let index = 0; // 큐의 처리 인덱스
  let queue = []; // [x, y, day]
  let unripped = 0; // 안 익은 과일 개수

  // 처음에 1인 친구들의 좌표값 찾기
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === 1) queue.push([i, j, 0]);
      else if (board[i][j] === 0) unripped++;
    }
  }

  if (unripped === 0) return 0;

  while (index < queue.length) {
    let [x, y, day] = queue[index++];
    board[x][y] = 1;

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      // 범위 내에 있고 익지 않은 토마토일 경우
      if (nx >= 0 && nx < N && ny >= 0 && ny < M && board[nx][ny] === 0) {
        board[nx][ny] = 1;
        queue.push([nx, ny, day + 1]);
        unripped--;
      }
    }
  }

  if (unripped > 0) return -1;

  const [, , day] = queue.pop();
  return day;
};

console.log(bfs());

/*

시작점이 여러개인 BFS를 돌리는 방법은 그냥 모든 시작점을 큐에 넣고 BFS하기

그냥 간단하게 bfs로 풀었더니 시간 초과 발생

2가지 부분을 개선 

1. queue를 이용할 때 shift를 이용하므로 배열의 맨 앞 요소를 제거하므로 O(n) 시간 복잡도가 발생

-> 따라서 index로 처리함

2. 과일이 모두 이미 익은 경우, 모두 익을 수 업는 경우를 각각 2중 for문으로 체크했는데 그러지 않고 최대한 bfs 시에 함께 체크되도록 함

*/
