const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const n = Number(input[0]);
const nums = input[1]
  .split(" ")
  .map((num) => BigInt(num))
  .sort((a, b) => (a < b ? -1 : 1));

let pointer1 = 0;
let pointer2 = n - 1;

let min = BigInt(2000000000);
let answer = [0n, 0n]; // 용액 2개

const calulateAbs = (num) => {
  return 0n - num >= 0n ? 0n - num : num - 0n;
};

while (pointer1 < pointer2) {
  const sum = nums[pointer1] + nums[pointer2];

  if (calulateAbs(0n - min) >= calulateAbs(0n - sum)) {
    min = sum;
    answer = [nums[pointer1], nums[pointer2]];
  }

  if (sum > 0n) {
    pointer2--;
  } else {
    pointer1++;
  }
}

console.log(answer.join(" "));

// BIGINT 써야하나?
// 포인터가 양쪽 끝에서 시작되어야 함 -> 합의 값에 따라서 두 개의 포인터를 가운데로 이동시키고 pointer1 < pointer2 조건이 틀리면 종료한다!
// let min = BigInt(2000000000); 처음에 1000000000로 설정해서 틀렸다! 두 수의 합이므로 최대는 2000000000이다!
