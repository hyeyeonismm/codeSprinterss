n = int(input())
A = list(map(int, input().split())) # 수열 입력
dp = [0 for _ in range(n)]

for i in range(n): # i번째 원소에 대해
    for j in range(i): # i보다 앞에 있는 원소들과 비교
        if A[i] > A[j] and dp[i] < dp[j]:
            dp[i] = dp[j] # dp[i]를 갱신
    dp[i] += 1

print(max(dp))