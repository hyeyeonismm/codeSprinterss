const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const N = Number(input[0]);

let ingredients = [];

for (let i = 1; i <= N; i++) {
  const [sour, bitter] = input[i].split(" ").map(Number);
  ingredients.push([sour, bitter]);
}

let answer = Infinity;

// 1부터 2^N - 1까지 모든 조합을 확인 = 1 << N : 2진수의 각 자리는 특정 재료를 선택했는지 여부를 나타냄
for (let mask = 1; mask < 1 << N; mask++) {
  let totalSour = 1; // 신맛의 곱
  let totalBitter = 0; // 쓴맛의 합

  for (let i = 0; i < N; i++) {
    if (mask & (1 << i)) {
      // i번째 재료를 선택했는지 확인
      const [sour, bitter] = ingredients[i];
      totalSour *= sour;
      totalBitter += bitter;
    }
  }

  // 신맛과 쓴맛의 차이의 절댓값으로 최소값 갱신
  answer = Math.min(answer, Math.abs(totalSour - totalBitter));
}

console.log(answer);

// 단순히 재귀를 이용해서 풀었을 때 풀이
/*

const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const N = Number(input[0]);

let ingredients = [];

for (let i = 1; i <= N; i++) {
  const [sour, bitter] = input[i].split(" ").map(Number);
  ingredients.push([sour, bitter]);
}

let answer = Infinity;

const selectIngredient = (index, sour, bitter) => {
  if (index === N) {
    if (bitter > 0) {
      const result = Math.abs(sour - bitter);
      answer = Math.min(result, answer);
    }

    return;
  }

  const [currentSour, currentBitter] = ingredients[index];

  selectIngredient(index + 1, sour, bitter);
  selectIngredient(index + 1, sour * currentSour, bitter + currentBitter);
};

selectIngredient(0, 1, 0);

console.log(answer);

*/

// 비트 마스킹을 사용하기

/*

const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const N = Number(input[0]);

let ingredients = [];

for (let i = 1; i <= N; i++) {
  const [sour, bitter] = input[i].split(" ").map(Number);
  ingredients.push([sour, bitter]);
}

let answer = Infinity;

// 1부터 2^N - 1까지 모든 조합을 확인 = 1 << N : 2진수의 각 자리는 특정 재료를 선택했는지 여부를 나타냄
for (let mask = 1; mask < 1 << N; mask++) {
  let totalSour = 1; // 신맛의 곱
  let totalBitter = 0; // 쓴맛의 합

  for (let i = 0; i < N; i++) {
    if (mask & (1 << i)) {
      // i번째 재료를 선택했는지 확인
      const [sour, bitter] = ingredients[i];
      totalSour *= sour;
      totalBitter += bitter;
    }
  }

  // 신맛과 쓴맛의 차이의 절댓값으로 최소값 갱신
  answer = Math.min(answer, Math.abs(totalSour - totalBitter));
}

console.log(answer);


*/
