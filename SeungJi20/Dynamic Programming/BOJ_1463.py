x = int(input())
dp = [0] * (x + 1) # dp[i]는 i를 1로 만들기 위한 최소 연산 횟수

for i in range(2, x + 1):
    dp[i] = dp[i - 1] + 1

    if i % 2 == 0:
        dp[i] = min(dp[i], dp[i // 2] + 1)

    if i % 3 == 0:
        dp[i] = min(dp[i], dp[i // 3] + 1)

print(dp[x])