const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");
const [aNum, bNum] = input[0].split(" ");

const changeToBigInt = (str) => {
  const num = parseInt(str);
  if (!isNaN(num)) return BigInt(num);

  return BigInt(str.charCodeAt() - 97 + 10);
};

const changeToTen = (num, type) => {
  let result = 0n;

  const nums = num.split("").reverse();

  for (let j = 0; j < nums.length; j++) {
    const bigIntNum = changeToBigInt(nums[j]);
    if (bigIntNum > 9n && bigIntNum >= type) return null;
    const tenNum = type ** BigInt(j) * bigIntNum;
    result += tenNum;
  }
  if (result >= 2n ** 63n) return null;
  return result;
};

let a = {}; // key - 진법, value - X값
for (let i = 2; i <= 36; i++) {
  const changeResult = changeToTen(aNum, BigInt(i));
  if (changeResult !== null) a[changeResult] ? a[changeResult].push(i) : (a[changeResult] = [i]);
}

let b = {}; // key - 진법, value - X값
for (let i = 2; i <= 36; i++) {
  const changeResult = changeToTen(bNum, BigInt(i));
  if (changeResult !== null) b[changeResult] ? b[changeResult].push(i) : (b[changeResult] = [i]);
}

let answer = [];
Object.keys(a).forEach((key) => {
  if (b[key]?.length) {
    // a !== b
    for (let j = 0; j < a[key].length; j++) {
      for (let k = 0; k < b[key].length; k++) {
        if (a[key][j] !== b[key][k]) answer.push(`${key} ${a[key][j]} ${b[key][k]}`);
      }
    }
  }
});

if (answer.length > 1) {
  console.log("Multiple");
} else if (answer.length) {
  console.log(answer[0]);
} else {
  console.log("Impossible");
}

// 진법 찾아보기

// 이것도 BigInt 써야하나..(O)

// 시간 초과날까봐 걱정했지만 차분히 조건 맞추면 괜찮았다!
