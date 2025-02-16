function solution(friends, gifts) {
  var answer = 0;

  let friendsNum = {};

  for (let i = 0; i < friends.length; i++) {
    friendsNum[friends[i]] = i;
  }

  let giftTable = Array.from({ length: friends.length }, () => Array(friends.length).fill(0));
  for (let gift of gifts) {
    const [A, B] = gift.split(" ");
    giftTable[friendsNum[A]][friendsNum[B]]++;
  }

  let nextMonthGifts = new Array(friends.length).fill(0);

  const calculateGiftNum = (num) => {
    let giveNum = 0;
    for (let i = 0; i < friends.length; i++) {
      giveNum += giftTable[num][i];
    }

    let recieveNum = 0;
    for (let i = 0; i < friends.length; i++) {
      recieveNum += giftTable[i][num];
    }

    return giveNum - recieveNum;
  };

  // 두 명씩 판단하기
  for (let i = 0; i < friends.length; i++) {
    for (let j = i; j < friends.length; j++) {
      const AtoB = giftTable[i][j];
      const BtoA = giftTable[j][i];

      if (AtoB > BtoA) {
        nextMonthGifts[i]++;
      } else if (AtoB < BtoA) {
        nextMonthGifts[j]++;
      } else if (AtoB === BtoA) {
        const AGiftNum = calculateGiftNum(i);
        const BGiftNum = calculateGiftNum(j);

        if (AGiftNum > BGiftNum) nextMonthGifts[i]++;
        else if (AGiftNum < BGiftNum) nextMonthGifts[j]++;
      }
    }
  }

  answer = Math.max(...nextMonthGifts);

  return answer;
}
