const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");
let n = Number(input[0]);
let crains = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let m = Number(input[2]);
let boxes = input[3]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

let crainBox = Array(n).fill(0); // crain별로 가지는 박스 개수
for (let i = 0; i < m; i++) {
  const box = boxes[i];
  const crainIndex = crains.findIndex((value) => value >= box);
  if (crainIndex === -1) {
    console.log(-1);
    return;
  }

  let min = Infinity;
  let minIndex = n - 1;
  for (let j = n - 1; j >= crainIndex; j--) {
    if (crainBox[j] < min) {
      minIndex = j;
      min = crainBox[j];
    }
  }
  crainBox[minIndex]++;
}

console.log(Math.max(...crainBox));

// crain은 무게 제한이 작은것부터 정렬!
// box는 무게가 큰것부터 정렬!
// 무게가 큰 box부터 어떤 crain에 넣을지 결정하자! -> 여러 crain이 가능할 경우 가장 적은 개수를 담당한 crain에게 주자!
