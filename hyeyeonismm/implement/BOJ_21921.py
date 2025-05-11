import sys

n, x = map(int, sys.stdin.readline().split())
visitor = list(map(int, sys.stdin.readline().split()))
i = 0
cnt = [sum(visitor[0:x])]
while x < n:
    cnt.append(cnt[i] + visitor[x] - visitor[i])
    i += 1
    x += 1

max_val = max(cnt)

if max_val == 0:
    print("SAD")
else:
    print(max_val)
    print(cnt.count(max_val))
