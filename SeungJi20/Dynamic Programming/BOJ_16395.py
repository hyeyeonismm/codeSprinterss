import sys
input = sys.stdin.readline

n, k = map(int, input().split())

# DP 테이블 초기화
dp = [[0] * (n + 1) for _ in range(n + 1)]

# 기본 값 설정
for i in range(n + 1):
    dp[i][0] = 1
    dp[i][i] = 1

# DP 테이블 채우기
for i in range(2, n + 1):
    for j in range(1, i):
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]

print(dp[n - 1][k - 1])  # 인덱스가 1부터 시작이라, 출력할 때 1씩 빼줘야 함