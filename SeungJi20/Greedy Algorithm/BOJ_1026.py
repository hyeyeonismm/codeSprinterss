# 입력 받기
n = int(input())
A = list(map(int, input().split()))  # 첫 번째 리스트
B = list(map(int, input().split()))  # 두 번째 리스트

# 첫 번째 리스트는 내림차순 정렬, 두 번째 리스트는 오름차순 정렬
A.sort(reverse=True)
B.sort()

# 두 리스트의 원소들을 곱하여 합산
result = 0
for i in range(n):
    result += A[i] * B[i]

print(result)