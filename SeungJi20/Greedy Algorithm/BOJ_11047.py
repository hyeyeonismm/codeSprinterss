# 동전의 개수와 목표 금액 입력
n, k = map(int, input().split())

# 동전의 종류 입력
coins = []
for _ in range(n):
    coins.append(int(input()))

# 동전을 내림차순으로 정렬
coins.sort(reverse=True)

count = 0  # 필요한 동전의 개수

# 가장 큰 동전부터 사용
for coin in coins:
    if k == 0:
        break
    if coin <= k:
        count += k // coin
        k %= coin  # 남은 금액

print(count)