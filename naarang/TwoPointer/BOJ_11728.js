const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr1 = input[1].split(" ").map(Number);
const arr2 = input[2].split(" ").map(Number);

let pointer1 = 0;
let pointer2 = 0;

let answer = [];

while (pointer1 < n && pointer2 < m) {
  if (arr1[pointer1] > arr2[pointer2]) {
    answer.push(arr2[pointer2++]);
  } else {
    answer.push(arr1[pointer1++]);
  }
}

for (let i = pointer1; i < n; i++) {
  answer.push(arr1[i]);
}

for (let j = pointer2; j < m; j++) {
  answer.push(arr2[j]);
}

console.log(answer.join(" "));
