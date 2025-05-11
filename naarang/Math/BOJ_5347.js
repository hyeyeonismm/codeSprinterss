const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const n = parseInt(input[0]);
let answer = [];

const calculateGCD = (a, b) => {
  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }

  return a;
};

const calculateLCM = (a, b) => {
  const lcm = (a * b) / calculateGCD(a, b);
  return lcm;
};

for (let i = 1; i <= n; i++) {
  // a > b 임에 주의
  const [a, b] = input[i]
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);
  const result = calculateLCM(a, b);
  answer.push(result);
}

console.log(answer.join("\n"));

// 유클리드 호제법을 이용해서 최소공약수를 구한 후에
// 최대공배수는 (a * b / 최소공약수)로 구한다.
