function solution(user_id, banned_id) {
  var answer = 0;
  let set = new Set();
  let matchedId = Array.from({ length: banned_id.length }, () => []);

  function isMatch(str, pattern) {
    if (str.length !== pattern.length) return false;
    for (let i = 0; i < pattern.length; i++) {
      if (pattern[i] === "*") continue;
      if (pattern[i] !== str[i]) return false;
    }
    return true;
  }

  // 우선은 각 banned_id에 가능한 값들 계산하기
  for (let id of user_id) {
    for (let i = 0; i < banned_id.length; i++) {
      if (isMatch(id, banned_id[i])) matchedId[i].push(id);
    }
  }

  function dfs(nodes) {
    if (nodes.length === banned_id.length) {
      set.add(nodes.sort().join(","));
      return;
    }

    const nextIndex = nodes.length;
    for (let nextId of matchedId[nextIndex].filter((value) => !nodes.includes(value))) {
      dfs([...nodes, nextId]);
    }
  }

  for (let firstId of matchedId[0]) {
    dfs([firstId]);
  }

  answer = set.size;
  return answer;
}

// user_id의 길이가 작으므로 set으로 계산하자 그러면 모든 경우를 계산해야하므로 DFS를 사용하자
