import sys
input = sys.stdin.readline

# DP 배열 초기화
dp = [[0] * 3 for _ in range(100001)]

# 초기값 설정
dp[1] = [1, 0, 0]  # 1만 사용 가능
dp[2] = [0, 1, 0]  # 2만 사용 가능
dp[3] = [1, 1, 1]  # (2+1), (1+2), (3)

MOD = 1000000009 # 오버플로우 방지

# DP 테이블 채우기
for i in range(4, 100001):
    dp[i][0] = (dp[i-1][1] + dp[i-1][2]) % MOD
    dp[i][1] = (dp[i-2][0] + dp[i-2][2]) % MOD
    dp[i][2] = (dp[i-3][0] + dp[i-3][1]) % MOD

# 입력 및 출력
T = int(input())
for _ in range(T):
    n = int(input())
    print(sum(dp[n]) % MOD)