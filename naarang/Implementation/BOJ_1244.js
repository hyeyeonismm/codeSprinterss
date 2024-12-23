const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const switchNum = Number(input[0]);
let switches = input[1].split(" ").map(Number);
const studentNum = Number(input[2]);

const changeSwitch = (index) => {
  if (switches[index] === 1) switches[index] = 0;
  else switches[index] = 1;
};

const switchedByBoy = (num) => {
  for (let i = num - 1; i < switchNum; i += num) {
    changeSwitch(i);
  }
};

const switchedByGirl = (num) => {
  let start = num - 2;
  let end = num;

  changeSwitch(num - 1);

  while (start >= 0 && end < switchNum) {
    if (switches[start] !== switches[end]) break;

    changeSwitch(start);
    changeSwitch(end);
    start--;
    end++;
  }
};

for (let i = 3; i < 3 + studentNum; i++) {
  const [gender, num] = input[i].split(" ").map(Number);

  if (gender === 1) switchedByBoy(num);
  else switchedByGirl(num);
}

let answer = [];

switches.forEach((value, index) => {
  if (index % 20 === 0 && index !== 0) answer.push("\n");
  else if (index !== 0) answer.push(" ");
  answer.push(value);
});

console.log(answer.join(""));

/*

이 문제는 쉽게 풀렸다!

20개씩 출력하는 코드를 더 깔끔하게 할 수 없을까 했는데 

switch를 이용해서 20개씩 슬라이싱 후 공백으로 연결 가능
for (let i = 0; i < switches.length; i += 20) {
  answer.push(switches.slice(i, i + 20).join(" ")); 
}

console.log(groupes.join("\n"));

*/
