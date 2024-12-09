const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const [n, x] = input[0].split(" ").map(Number);
const visitors = input[1].split(" ").map(Number);

let max = 0;
let periodNum = 1;
let current = 0;

let pointer1 = 0;
let pointer2 = x;

for (let i = 0; i < x; i++) {
  max += visitors[i];
}

current = max;

while (pointer2 < n) {
  current -= visitors[pointer1++];
  current += visitors[pointer2++];

  if (max < current) {
    max = current;
    periodNum = 1;
  } else if (max === current) {
    periodNum++;
  }
}

if (max === 0) {
  console.log("SAD");
  return;
}

console.log(max);
console.log(periodNum);
