const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
let nums = input[1].split("").map(Number);

let deleteNum = 0;
let stack = [];

for (let i = 0; i < n; i++) {
  while (stack.length && stack[stack.length - 1] < nums[i] && deleteNum < k) {
    stack.pop();
    deleteNum++;
  }
  stack.push(nums[i]);
}

// 이때 54321 처럼 내림차순이면 마지막 수부터 자르기
console.log(stack.slice(0, n - k).join(""));

// 이거 규칙이 뭘까?
// 가장 큰 수가 앞에 오도록? -> 음...
// 맨 앞자리 수를 정하고 남은 수를 지워야 된다! 어떤 규칙으로 찾을 수 있을까?
// 그것보다 앞에서 부터 순환하면서 뒤의 원소보다 작으면 지우고 크면 안지운다! -> 이거를 반복하다가 k개의 수가 지워지면 stop하기!

// 다만 이때 54321 처럼 내림차순이면 가장 마지막 수를 지워라!

// 시간 초과 발생... 이유 -> splice는 삭제하면서 O(n) 시간 복잡도를 가진다!!!! -> stack을 이용하자!

// 반례
/*
6 2
999899
ans: 9999
wrong : 99999
*/
