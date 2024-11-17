const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

let n = Number(input[0]);

const isPalindrome = (num) => {
  const nums = num.toString().split("");
  const len = nums.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (nums[i] !== nums[len - 1 - i]) return false;
  }
  return true;
};

const isPrimeNumber = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

while (!isPalindrome(n) || !isPrimeNumber(n)) {
  n++;
}

console.log(n);
