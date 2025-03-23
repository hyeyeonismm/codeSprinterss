M = int(input())
N = int(input())
primes = []

# 소수 판별
for x in range(M, N + 1):
    if x > 1:
        for i in range(2, int(x ** 0.5) + 1): # 루트 x 까지만 검사해도 됨
            if x % i == 0:
                break
        else: # 소수에 추가
            primes.append(x)

if primes:
    print(sum(primes))
    print(min(primes))
else:
    print(-1)