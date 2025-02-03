import sys

n = int(sys.stdin.readline())
a = list(map(int, sys.stdin.readline().split()))
b = list(map(int, sys.stdin.readline().split()))
ans = 0

while len(a) > 0:
    idx = b.index(max(b))
    ans += b[idx] * min(a)
    a.remove(min(a))
    b.remove(max(b))

print(ans)
