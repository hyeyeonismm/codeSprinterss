# 피보나치에서 0과 1이 호출된 횟수를 저장하는 리스트
def count(n):
    dp = [[0, 0] for _ in range(n + 1)]
    
    # 초기값 설정
    dp[0] = [1, 0] # fib(0): 0은 1번, 1은 0번
    if n > 0:
        dp[1] = [0, 1] # fib(1): 0은 0번, 1은 1번
    
    for i in range(2, n + 1):
        dp[i][0] = dp[i - 1][0] + dp[i - 2][0] # 0 호출 횟수
        dp[i][1] = dp[i - 1][1] + dp[i - 2][1] # 1 호출 횟수

    return dp[n]

T = int(input())
for _ in range(T):
    N = int(input())
    result = count(N)
    print(result[0], result[1])
