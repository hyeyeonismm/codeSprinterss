import sys
k = int(sys.stdin.readline())
ans = []
for i in range(k):
    num = int(sys.stdin.readline())
    if num != 0:
        ans.append(num)
    else:
        ans.pop()

print(sum(ans))