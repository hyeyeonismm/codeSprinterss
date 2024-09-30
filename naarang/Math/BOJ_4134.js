const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const n = parseInt(input[0]);
let answer = [];

const isPrime = (num) => {
  if (num === 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
};

const calculatePrime = (num) => {
  if (num < 2) return 2; // num이 0, 1일 때는 바로 소수 2를 return 하도록 수정!
  while (!isPrime(num)) {
    num++;
  }
  return num;
};

for (let i = 1; i <= n; i++) {
  const num = parseInt(input[i]);
  const primeNum = calculatePrime(num);
  answer.push(primeNum);
}

console.log(answer.join("\n"));
