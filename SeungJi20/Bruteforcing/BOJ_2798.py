N, M = map(int, input().split())
nums = list(map(int, input().split()))

result = 0  # 최대 합 저장 변수

# 카드 3장
for i in range(N):
    for j in range(i+1, N):
        for k in range(j+1, N):
            temp = nums[i] + nums[j] + nums[k]
            if temp <= M:  # 합이 M을 넘지 않으면
                result = max(result, temp)  # 더 큰 값 저장

print(result)