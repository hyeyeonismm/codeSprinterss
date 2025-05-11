const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const [c, n] = input[0].split(" ").map(Number);
let cities = [];

for (let i = 1; i <= n; i++) {
  const city = input[i].split(" ").map(Number);
  cities.push(city);
}

let dp = new Array(c + 1).fill(Infinity);
dp[0] = 0;

for (let i = 1; i <= c; i++) {
  for (let city of cities) {
    const [cost, customer] = city;

    if (customer > i) dp[i] = Math.min(dp[i], cost);
    else dp[i] = Math.min(dp[i], cost + dp[i - customer]);
  }
}

console.log(dp[c]);
