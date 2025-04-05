n, k = map(int, input().split())
people = list(range(1, n + 1))
result = [] # 제거된 순서 저장
idx = 0 # 현재 인덱스 위치

while people:
    idx = (idx + k - 1) % len(people) # 원형
    result.append(people.pop(idx)) # k번째 사람 제거

print("<" + ", ".join(map(str, result)) + ">")