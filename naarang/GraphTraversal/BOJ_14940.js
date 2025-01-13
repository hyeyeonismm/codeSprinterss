const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

let map = [];
const distance = Array.from({ length: n }, () => new Array(m).fill(-1));

let startX = 0;
let startY = 0;

for (let i = 1; i <= n; i++) {
  const line = input[i].split(" ").map(Number);
  map.push(line);

  const targetIndex = line.indexOf(2);
  if (targetIndex !== -1) {
    startX = i - 1;
    startY = targetIndex;
  }
}

const bfs = (startX, startY) => {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  let visited = Array.from({ length: n }, () => new Array(m).fill(false));
  let needVisit = [[startX, startY]];
  visited[startX][startY] = true;
  distance[startX][startY] = 0;

  while (needVisit.length > 0) {
    const [x, y] = needVisit.shift();

    for (let i = 0; i < 4; i++) {
      const nextX = x + dx[i];
      const nextY = y + dy[i];

      if (nextX >= 0 && nextX < n && nextY >= 0 && nextY < m && map[nextX][nextY] !== 0 && !visited[nextX][nextY]) {
        needVisit.push([nextX, nextY]);
        visited[nextX][nextY] = true;

        distance[nextX][nextY] = distance[x][y] + 1;
      }
    }
  }
};

bfs(startX, startY);

// 실제로 0인 값은 나중에 -1 -> 0으로 반영하기
const answer = distance
  .map((line, col) => {
    const result = [];

    for (let row = 0; row < line.length; row++) {
      map[col][row] === 0 ? result.push(0) : result.push(line[row]);
    }

    return result.join(" ");
  })
  .join("\n");

console.log(answer);

/*

고려하지 못했던 반례 

input:
2 2
0 0
0 2
output:
-1 0 
0 0 
answer:
0 0 
0 0

0과 -1을 어떻게 구분해서 처리해야할 지 고민했는데 일단 다 -1로 처리하고 실제로 0인 값은 나중에 -1 -> 0으로 반영하기

한번에 간단하게 처리하려고 생각해서 어려웠다ㅠ


*/
