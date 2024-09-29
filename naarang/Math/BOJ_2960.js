const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);

const nums = new Array(n + 1).fill(true);
let count = 0; // 지워진 횟수
let answer = null;

// 2~n 사이의 수 중에서 소수인지 아닌지 판별하는 것이므로 i <= Math.sqrt(n)이 아니라 i <= n이었어야 했음!
for (let i = 2; i <= n; i++) {
  if (!nums[i]) continue;

  for (let j = i; j <= n; j += i) {
    if (!nums[j]) continue;
    count++;
    nums[j] = false;
    if (count === k) {
      answer = j;
      break;
    }
  }

  if (answer) break;
}

console.log(answer);

// 문제에서 P도 지워야된다에 주의!
// 이 문제는 완전한 에라토스체네스의 해 알고리즘보다는 응용이어서 문제의 조건에 맞게 변형해야 했다!
