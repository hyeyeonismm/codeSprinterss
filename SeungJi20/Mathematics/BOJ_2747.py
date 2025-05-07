n = int(input())
a, b = 0, 1

for _ in range(n):
    a, b = b, a + b

print(a) # a가 n번째 피보나치 수