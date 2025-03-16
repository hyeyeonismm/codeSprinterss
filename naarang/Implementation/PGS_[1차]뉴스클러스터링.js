function solution(str1, str2) {
  var answer = 0;
  // Key: 두 영문자, value: {A: 0, B: 0}
  let elements = {};

  str1 = str1.toLowerCase();
  for (let i = 0; i < str1.length - 1; i++) {
    if (str1[i] < "a" || str1[i] > "z") continue;
    if (str1[i + 1] < "a" || str1[i + 1] > "z") continue;

    const element = str1[i] + str1[i + 1];

    if (!elements[element]) elements[element] = { A: 0, B: 0 };
    elements[element].A++;
  }

  str2 = str2.toLowerCase();
  for (let i = 0; i < str2.length - 1; i++) {
    if (str2[i] < "a" || str2[i] > "z") continue;
    if (str2[i + 1] < "a" || str2[i + 1] > "z") continue;

    const element = str2[i] + str2[i + 1];

    if (!elements[element]) elements[element] = { A: 0, B: 0 };
    elements[element].B++;
  }

  let intersectionNum = 0; // 교집합
  let sumNum = 0; // 합집합

  Object.entries(elements).forEach(([, value]) => {
    const { A, B } = value;

    intersectionNum += Math.min(A, B);
    sumNum += Math.max(A, B);
  });

  if (intersectionNum === 0 && sumNum === 0) return 65536;

  answer = Math.floor((intersectionNum / sumNum) * 65536);
  return answer;
}
