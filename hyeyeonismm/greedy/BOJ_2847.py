import sys

n = int(sys.stdin.readline())
cnt = 0
score = [int(sys.stdin.readline().strip()) for _ in range(n)]

for i in range(n - 1, 0, -1):
    while score[i] <= score[i - 1]:
        score[i - 1] -= 1
        cnt += 1

print(cnt)
