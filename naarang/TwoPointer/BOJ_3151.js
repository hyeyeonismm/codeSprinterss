const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const n = Number(input[0]);
const students = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let answer = 0;

for (let start = 0; start < n - 2; start++) {
  if (students[start] > 0) break; // 첫번째 수가 양수보다 커지면 무조건 합이 0보다 커지므로 그 뒤는 탐색할 필요가 없다! 0, 0, 0인 경우도 있을 수 있어서 >=가 아니라 > 여야 함!!
  let pointer1 = start + 1;
  let pointer2 = n - 1;

  while (pointer1 < pointer2) {
    const sum = students[start] + students[pointer1] + students[pointer2];

    if (sum === 0) {
      // 중복 고려하기
      if (students[pointer1] === students[pointer2]) {
        const num = pointer2 - pointer1 + 1;

        // nC2
        // n * n -1 / 2
        const result = (num * (num - 1)) / 2;
        answer += result;
        break;
      } else {
        let leftNum = 1;
        for (let left = pointer1 + 1; students[left] === students[pointer1]; left++) {
          leftNum++;
        }

        let rightNum = 1;
        for (let right = pointer2 - 1; students[right] === students[pointer2]; right--) {
          rightNum++;
        }

        answer += leftNum * rightNum;
        pointer1 += leftNum;
        pointer2 -= rightNum;
      }
    } else if (sum > 0) {
      pointer2--;
    } else {
      pointer1++;
    }
  }
}

console.log(answer);

// 2명이 아니라 3명이면 어떻게 해야하는가...? -> 첫번째 사람을 고정한 상태에서 나머지 두 명을 찾아본다!
// set에 index 3개를 저장하기 -> 메모리 초과 발생 -> 근데 생각해보니깐 중복이 발생하지 않아서 set이 필요가 없었다!

/* 근데 이게 왜 투 포인터 문제일까요? 그걸 어떻게 알 수 있을까?

정렬된 배열에서 특정 조건을 만족하는 쌍을 찾는 것 -> 배열의 크기가 크므로 투 포인터를 이용하면 시간을 줄일 수 있다!

-> 정렬 후 특정 조건을 만족하는 조합(합이 0)을 구해야 한다는 문제이므로!


*/

// 중복인 값들까지 생각하기가 어려워...

/*
sum === 0 일 때 중복인 값을 해결하는 방법

1) students[pointer1] === students[pointer2]
두 개의 포인터 사이의 모든 값이 중복인 것이므로 해당 값의 개수들 중에서 2개를 
무작위로 선택하는 nC2의 경우의 수를 계산해야 함
그리고 더 이상 탐색할 필요가 없으므로 break;

2)  students[pointer1] !== students[pointer2]
첫번째 포인터와 중복된 값이 몇 개인지, 두번째 포인터와 중복된 값이 몇 개인지를 각각 구한 다음에 곱하면 경우의 수를 구할 수 있다!

그리고 투 포인터 값을 중복값만큼 갱신해주어야 함!

*/
