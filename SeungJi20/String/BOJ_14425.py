N, M = map(int, input().split())
S = set()
for i in range(N):
    S.add(input()) # N개의 문자열을 입력받아 set에 추가
count = 0 
# M개의 문자열을 입력받고, 그 중 set에 있는 문자열의 개수를 셈
for _ in range(M):
    t = input()
    if t in S:
        count += 1
print(count)