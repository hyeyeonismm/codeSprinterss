const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

// 접시의 수 N, 초밥의 가짓수 d, 연속해서 먹는 접시의 수 k, 쿠폰 번호 c
const [n, d, k, c] = input[0].split(" ").map(Number);
let foods = [];
for (let i = 1; i <= n; i++) {
  foods.push(Number(input[i]));
}

let map = new Map();

const addFood = (food) => {
  if (map.has(food)) map.set(food, map.get(food) + 1);
  else map.set(food, 1);
};

const deleteFood = (food) => {
  const currentNum = map.get(food);
  if (currentNum > 1) map.set(food, currentNum - 1);
  else map.delete(food);
};

// 처음 k개 계산하기
for (let i = 0; i < k; i++) {
  addFood(foods[i]);
}
addFood(c);
let answer = map.size;

for (let i = 1; i < n; i++) {
  if (foods[i - 1] !== c) deleteFood(foods[i - 1]);
  addFood(foods[(i + k - 1) % n]);

  answer = Math.max(answer, map.size);
}

console.log(answer);

// 처음에 set으로 저장할까 했는데... 음.. 중복값 때문에... -> 중복값들을 어떻게 처리하지?
// set이 아니라 Map으로 해서 key - 초밥 종류, value - 해당 종류의 개수로 해야겠다!
// 실행 시간이 오래 걸렸는데 찾아보니깐 다른 분들은 map이 아니라 어차피 초밥의 가짓수가 d개 이므로 d만큼의 길이를 가진 배열을 만들어서 그곳에 초밥의 개수를 저장한 것 같다!
