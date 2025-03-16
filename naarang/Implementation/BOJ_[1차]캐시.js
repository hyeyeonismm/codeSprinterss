function solution(cacheSize, cities) {
  var answer = 0;

  const cache = []; // queue 처럼 쓰자!
  let cacheCurrentSize = 0;

  function isCacheHit(city) {
    const findIndex = cache.indexOf(city);
    if (findIndex === -1) return false;

    // true면 맨 앞으로 보내기
    cache.splice(findIndex, 1);
    cache.push(city);
    return true;
  }

  function addCityToCache(city) {
    if (cacheCurrentSize === cacheSize) {
      cache.shift();
    } else {
      cacheCurrentSize++;
    }

    cache.push(city);
  }

  // 캐시가 0일 때를 생각해서 예외처리를 하는 것이 중요했다!
  if (cacheSize === 0) {
    answer = cities.length * 5;
    return answer;
  }

  for (let city of cities) {
    const formattedCity = city.toLowerCase();
    if (isCacheHit(formattedCity)) {
      answer++;
    } else {
      answer += 5;
      addCityToCache(formattedCity);
    }
  }

  return answer;
}
