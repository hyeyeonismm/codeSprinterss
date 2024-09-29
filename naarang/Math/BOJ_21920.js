const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const n = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);
const x = parseInt(input[2]);

const isDisjoint = (num1, num2) => {
  if (num1 === num2) return false;

  let a = num1;
  let b = num2;
  if (num1 < num2) {
    // a > b 여야 함
    a = num2;
    b = num1;
  }
  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }

  if (a === 1) return true;
  return false;
};

const disjointArr = arr.filter((value) => isDisjoint(x, value));
const sum = disjointArr.reduce((prev, cur) => prev + cur, 0);
console.log(sum / disjointArr.length);
