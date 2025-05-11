const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const n = Number(input[0]);

let a = [];
let b = [];
let c = [];
let d = [];

for (let i = 1; i <= n; i++) {
  const nums = input[i].split(" ").map(Number);
  a.push(nums[0]);
  b.push(nums[1]);
  c.push(nums[2]);
  d.push(nums[3]);
}

let ab = new Map();
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    const sum = a[i] + b[j];
    const prevNum = ab.get(sum);

    if (prevNum) ab.set(sum, prevNum + 1);
    else ab.set(sum, 1);
  }
}

let answer = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    const sum = c[i] + d[j];
    if (ab.has(sum * -1)) {
      answer += ab.get(sum * -1);
    }
  }
}

console.log(answer);

// 3개일 때는 한 개를 고정하고 나머지를 구했는데... 4개일 때는? 2개를 고정해야하나?
// 그리고 중복값이 있으니깐 주의!
// 아니면 ab랑 cd 합을 각각 구해서 투포인터 방식으로 2개씩 조합을 찾는 거는? -> 이거 이 문제는 투 포인터 방식으로 풀면 시간 초과 난다고... 따라서 map을 써야 한다고 한다ㅠ 아마도 배열을 정렬하다보니깐 그런 것 같다고 한다..

/*
투 포인터 방식 풀이

const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const n = Number(input[0]);

let a = [];
let b = [];
let c = [];
let d = [];

for (let i = 1; i <= n; i++) {
  const nums = input[i].split(" ").map(Number);
  a.push(nums[0]);
  b.push(nums[1]);
  c.push(nums[2]);
  d.push(nums[3]);
}

let ab = [];
let cd = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    ab.push(a[i] + b[j]);
    cd.push(c[i] + d[j]);
  }
}

ab.sort((a, b) => a - b);
cd.sort((a, b) => a - b);

let pointer1 = 0;
let pointer2 = n * n - 1;

let answer = 0;

while (pointer1 < n * n && pointer2 >= 0) {
  const sum = ab[pointer1] + cd[pointer2];

  if (sum === 0) {
    // 중복값 고려하기
    let abNum = 0;
    for (let j = pointer1; ab[j] === ab[pointer1]; j++) {
      abNum++;
    }

    let cdNum = 0;
    for (let j = pointer2; cd[j] === cd[pointer2]; j--) {
      cdNum++;
    }
    answer += abNum * cdNum;
    pointer1 += abNum;
    pointer2 -= cdNum;
  } else if (sum > 0) {
    pointer2--;
  } else {
    pointer1++;
  }
}

console.log(answer);

*/
