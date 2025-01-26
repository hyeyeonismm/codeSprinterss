const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const trees = input[1].split(" ").map(Number);

let min = 0;
let max = Math.max(...trees);

while (min <= max) {
  const mid = Math.floor((min + max) / 2);

  let length = 0;
  trees.forEach((tree) => {
    const result = tree - mid;
    if (result > 0) length += result;
  });

  if (length < M) {
    max = mid - 1;
  } else {
    min = mid + 1;
  }
}

console.log(max);

/*

백준 1654번과 유사한 문제!

이렇게 높이를 탐색해야할 때 순차적으로 하지 않고 정렬과 이분탐색을 통해서 빠르게 탐색하는 듯!

*/
