function solution(n, t, m, timetable) {
  var answer = "";

  // "HH:MM"을 숫자로 바꾸기
  const transformToTime = (timeString) => {
    const [HH, MM] = timeString.split(":");

    const hours = parseInt(HH);
    const minutes = parseInt(MM);

    return { hours, minutes };
  };

  // 시간 비교하기
  const isPrevTime = (prevTime, nextTime) => {
    if (nextTime.hours > prevTime.hours || (nextTime.hours === prevTime.hours && nextTime.minutes >= prevTime.minutes)) return true;

    return false;
  };

  // 시간 순으로 정렬
  timetable = timetable
    .map((value) => transformToTime(value))
    .sort((a, b) => {
      if (isPrevTime(a, b)) return -1;
      else return 1;
    });
  console.log("timetable: ", timetable);

  let startTime = { hours: 9, minutes: 0 };
  let firstCrueIndex = 0; // 대기 중인 첫번째 크루 index
  let lastCrueTime = { hours: 9, minutes: 0 }; // 버스에 탄 크루 중에서 가장 마지막 크루의 도착 시간
  for (let i = 0; i < n; i++) {
    let crueCount = 0;

    while (firstCrueIndex < timetable.length) {
      const { hours, minutes } = timetable[firstCrueIndex];

      if (isPrevTime({ hours, minutes }, startTime)) {
        lastCrueTime = { hours, minutes };
        crueCount++;
        firstCrueIndex++;
      } else {
        break;
      }

      if (crueCount >= m) {
        lastCrueTime.minutes === 0 ? (lastCrueTime = { hours: lastCrueTime.hours - 1, minutes: 59 }) : lastCrueTime.minutes--;
        break;
      }
    }

    if (crueCount < m) lastCrueTime = { hours: startTime.hours, minutes: startTime.minutes };

    if (startTime.minutes + t >= 60) {
      startTime.hours++;
      startTime.minutes = startTime.minutes + t - 60;
    } else {
      startTime.minutes += t;
    }
  }

  // HH:MM으로 형식 맞추기
  const HH = lastCrueTime.hours > 9 ? `${lastCrueTime.hours}` : `0${lastCrueTime.hours}`;
  const MM = lastCrueTime.minutes > 9 ? `${lastCrueTime.minutes}` : `0${lastCrueTime.minutes}`;

  answer = HH + ":" + MM;

  return answer;
}

// 아예 Date 형식으로 치환해서 풀면 더 깔끔하게 작성할 수 있었다!
