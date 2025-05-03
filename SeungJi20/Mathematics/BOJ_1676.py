N = int(input())
count = 0

# 팩토리얼 결과에서 0의 개수는 5의 개수가 중요함
while N >= 5:
    count += N // 5
    N //= 5

print(count)