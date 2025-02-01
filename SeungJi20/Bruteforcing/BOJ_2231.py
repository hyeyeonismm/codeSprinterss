N = int(input())

for M in range(1, N+1):
    digits = sum(map(int, str(M)))
    if M + digits == N:
        print(M)
        break
else: # for문이 끝까지 실행되고 난 이후
    print(0)