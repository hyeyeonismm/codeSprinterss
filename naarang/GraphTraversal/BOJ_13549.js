const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const [start, end] = input[0].split(" ").map(Number);

const bfs = (initialTime, initialLocation) => {
  let queue = [[initialTime, initialLocation]]; // [time, location]
  let visited = new Array(100000).fill(false);
  visited[start] = true;

  while (queue.length > 0) {
    const [time, location] = queue.shift();
    visited[location] = true;

    if (location === end) {
      console.log(time);
      return;
    }

    if (location <= 50000 && !visited[location * 2]) queue.unshift([time, location * 2]); // unshift로 앞에다가 두기!
    if (location < 100000 && !visited[location + 1]) queue.push([time + 1, location + 1]);
    if (location > 0 && !visited[location - 1]) queue.push([time + 1, location - 1]);
  }
};

bfs(0, start);

/*

BFS로 간단하게 풀었는데 시간 초과..

이미 탐색한 위치는 갈 필요없다! 먼저 도착한 경우가 이미 있으므로 ~

아하! 2배로 이동하는 건 0초만 걸리는 것이므로 더 빨라서 가중치를 시간으로 두고 먼저 탐색해야 한다!

*/
