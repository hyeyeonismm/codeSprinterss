const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

// 이 문제는 해당 시점에서 가장 크기가 작은 2개의 묶음을 합치면 되는 것 같다!

const n = parseInt(input.shift());

let cards = input.map(Number).sort((a, b) => b - a); // 뭔가 shift보단 pop이 더 시간 절약일 듯해서 내림차순으로 정렬한 후 뒤에서 꺼낼 계획!
let answer = 0;
while (cards.length > 1) {
  const smallCards1 = cards.pop();
  const smallCards2 = cards.pop();
  const newCards = smallCards1 + smallCards2;
  answer += newCards;
  // 개선 전
  // cards.push(newCards);
  // cards.sort((a, b) => b - a);
  // 개선 후
  let newCardIndex = 0;
  let isFindIndex = false; // 그리고 index 못찾으면 가장 작은 값이므로 맨 마지막에 넣기!
  for (let i = 0; i < cards.length; i++) {
    if (newCards >= cards[i]) {
      newCardIndex = i;
      isFindIndex = true;
      break;
    }
  }
  if (!isFindIndex) newCardIndex = cards.length - 1;
  cards.splice(newCardIndex, 0, newCards);
}

console.log(answer);

// 메모리 초과 발생....
// 원인 -> 매번 sort를 하기 때문이다!
// 새로 묶은 카드를 삽입할 때 자기보다 큰 게 나오면 그 앞에 삽입하기
