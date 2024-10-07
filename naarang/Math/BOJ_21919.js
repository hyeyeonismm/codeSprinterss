const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

let nums = input[1].split(" ").map(BigInt);

const isPrimeNumber = (num) => {
  if (num < 2n) return false;
  for (let i = 2n; i <= BigInt(Math.floor(Math.sqrt(Number(num)))); i++) {
    if (num % i === 0n) return false;
  }

  return true;
};

const primeNumbers = [...new Set(nums.filter((num) => isPrimeNumber(num)))];

if (!primeNumbers?.length) {
  console.log(-1);
  return;
}

// 소수들은 서로 공약수가 없으니깐 그냥 전체 곱이 최소공배수!
let answer = 1n;

primeNumbers.forEach((num) => {
  answer *= num;
});
console.log(answer.toString());

// 같은 소수가 여러개 있을수도 있다!!! -> set 자료형 사용
// Number 자료형이 안정적으로 나타낼 수 있는 값의 최대치는 2^53-1(=10^6)이다.
// 따라서 BigInt를 써야했다!
/*
BigInt 사용법
1. 정수 뒤에 n을 붙이거나 BigInt()로 변환 가능
2. 소수점 이하를 항상 버림
3. Math 객체의 메서드와 함께 사용 못함
*/
