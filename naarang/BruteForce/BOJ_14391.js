const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
let board = [];

for (let i = 1; i <= N; i++) {
  const row = input[i].split("").map(Number);
  board.push(row);
}

let answer = 0;
let visited = Array.from({ length: N }, () => new Array(M).fill(false));

const dfs = (depth, num, sum) => {
  if (depth === N * M) {
    answer = Math.max(answer, sum);
    return;
  }

  const row = Math.floor(depth / M);
  const col = depth % M;

  if (visited[row][col]) {
    dfs(depth + 1, num, sum);
    return;
  }

  visited[row][col] = true;
  // 자신에서 자르기
  num = num * 10 + board[row][col];
  dfs(depth + 1, 0, sum + num);

  // 세로로 포함해서 계산하기
  let i = 0;
  let temp = num;

  for (i = row + 1; i < N; i++) {
    if (visited[i][col]) break;

    visited[i][col] = true;
    temp = temp * 10 + board[i][col];
    dfs(depth + 1, 0, sum + temp);
  }

  for (let j = row + 1; j < i; j++) {
    visited[j][col] = false;
  }

  // 가로로 포함해서 계산하기
  temp = num;
  for (i = col + 1; i < M; i++) {
    if (visited[row][i]) break;

    visited[row][i] = true;
    temp = temp * 10 + board[row][i];
    dfs(depth + i - col + 1, 0, sum + temp);
  }

  for (let j = col + 1; j < i; j++) {
    visited[row][j] = false;
  }

  visited[row][col] = false;
};

dfs(0, 0, 0);

console.log(answer);

/*

이 문제는 다음에도 다시 풀어보자!!

1. dfs로 풀기

https://thdbs523.tistory.com/297

2. 비트마스크로 풀기(gpt)

가로를 0, 세로를 1로 두고 판단하기 모든 경우의 수 1 << (N * M)

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const board = input.slice(1).map((line) => line.split("").map(Number));

let answer = 0;

// 비트마스킹을 이용한 모든 경우의 수 탐색
for (let mask = 0; mask < (1 << (N * M)); mask++) {
  let sum = 0;

  // 가로 조합 계산
  for (let i = 0; i < N; i++) {
    let current = 0;
    for (let j = 0; j < M; j++) {
      const idx = i * M + j; // 현재 칸의 비트 인덱스
      if ((mask & (1 << idx)) !== 0) {
        // 현재 칸이 가로로 포함됨
        current = current * 10 + board[i][j];
      } else {
        // 현재 칸이 가로 조합이 끝남
        sum += current;
        current = 0;
      }
    }
    sum += current; // 마지막 남은 가로 숫자 추가
  }

  // 세로 조합 계산
  for (let j = 0; j < M; j++) {
    let current = 0;
    for (let i = 0; i < N; i++) {
      const idx = i * M + j; // 현재 칸의 비트 인덱스
      if ((mask & (1 << idx)) === 0) {
        // 현재 칸이 세로로 포함됨
        current = current * 10 + board[i][j];
      } else {
        // 현재 칸이 세로 조합이 끝남
        sum += current;
        current = 0;
      }
    }
    sum += current; // 마지막 남은 세로 숫자 추가
  }

  answer = Math.max(answer, sum);
}

console.log(answer);


*/
