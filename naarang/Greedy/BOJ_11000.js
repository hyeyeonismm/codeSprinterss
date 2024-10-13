const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const n = Number(input.shift());
const times = [];

input.forEach((value) => {
  const [startTime, endTime] = value.split(" ").map(Number);
  times.push({ time: startTime, start: true });
  times.push({ time: endTime, start: false });
});

times.sort((a, b) => (a.time === b.time ? a.start - b.start : a.time - b.time));

let max = 0;
let cur = 0;
times.forEach((value) => {
  if (value.start) {
    cur++;
    max = Math.max(max, cur);
  } else {
    cur--;
  }
});

console.log(max);

// 틀렸습니다 해결
// 이 문제는 한 강의실에 최대한 많은 것을 넣는게 아니라 각 강의실에 넣어주는 것이므로 시작 시간으로 정렬해야 틀리지 않았다.
/* 반례
8
1 8
9 16
3 7
8 10
10 14
5 6
6 11
11 12
*/

// 이번에는 시간 초과 발생...
/*
앞의 회의실 배정 문제 처럼 풀었더니.. 시간 초과ㅠ

정말 모르겠어서 인터넷을 참고했는데 다른 관점으로 접근했어야 했다!

필요한 강의실의 수는 중첩된 강의가 가장 많은 시간의 강의의 수이므로 
시간을 기준으로 순회를 하면서, 강의가 가장 많이 겹치는 max값을 찾아야 했다!

또한 강의별 시간 정렬 시에 주의할 점이 time이 같다면, false가 앞에 와야함. 강의가 끝나고 다른 강의가 시작 되어야함한다!
*/
