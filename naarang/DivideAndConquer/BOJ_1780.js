const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const n = Number(input[0]);
let paper = [];

for (let i = 1; i <= n; i++) {
  paper.push(input[i].split(" ").map(Number));
}

const type = [-1, 0, 1];
const answer = [0, 0, 0];

const isSameNumber = (startX, startY, size) => {
  for (let i = startX; i < startX + size; i++) {
    for (let j = startY; j < startY + size; j++) {
      if (paper[startX][startY] !== paper[i][j]) return false;
    }
  }

  return true;
};

const cutPaper = (startX, startY, size) => {
  if (isSameNumber(startX, startY, size)) {
    const index = type.indexOf(paper[startX][startY]);
    answer[index]++;
    return;
  }

  const nextSize = size / 3;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      cutPaper(startX + nextSize * i, startY + nextSize * j, nextSize);
    }
  }
};

cutPaper(0, 0, n);

console.log(answer.join("\n"));
