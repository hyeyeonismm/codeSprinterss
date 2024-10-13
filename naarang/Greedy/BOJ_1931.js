const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");
let n = Number(input.shift());
let meetings = input
  .map((meeting) => meeting.split(" ").map(Number))
  .sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });

let answer = 0; // 회의의 개수 최대값

let lastMeetingEndTime = 0;
for (let i = 0; i < n; i++) {
  const [startTime, endTime] = meetings[i];

  if (lastMeetingEndTime <= startTime) {
    lastMeetingEndTime = endTime;
    answer++;
  }
}

console.log(answer);

// 정렬을 하는게 확실히 개선하기 좋을듯!
// 전체 시간 배열에 회의를 기록하지 않고 마지막 회의의 종료 시간만 가지고도 비교가 가능하므로!

// 시간 초과 발생... -> O(N^2)에서 O(N)으로 줄임
/*
정렬할 때 회의 시작 시간이 아니라 회의 종료 시간 기준으로 해야 함
-> 종료 시간이 빠를수록 더 많은 회의를 배정할 수 있으므로!!
*/
