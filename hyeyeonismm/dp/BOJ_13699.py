import sys

n = int(sys.stdin.readline())
dp = [0 for _ in range(n + 1)]
dp[0] = 1
i = 1

while i <= n:
    for j in range(i):
        dp[i] += dp[j] * dp[i - (j + 1)]

    i += 1

print(dp[n])
