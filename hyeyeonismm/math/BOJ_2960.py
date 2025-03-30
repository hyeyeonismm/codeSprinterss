n, k = map(int, input().split())

ans = []

for i in range(2, n + 1):
    j = 1
    while i * j <= n and len(ans) < k:
        if i * j not in ans:
            ans.append(i * j)
        j += 1

print(ans[-1])
