M = int(input()) # 시작값
N = int(input()) # 끝값
arr = [] # 완전 제곱수를 저장할 리스트
sum = 0 # 완전 제곱수들의 합을 저장할 변수

for i in range(1, int(N**0.5) + 1):
    square = i ** 2 # i의 제곱수
    if M <= square <= N:
        sum += square
        arr.append(square)

if sum == 0: # 제곱수가 하나도 없을 경우
    print(-1)
else:
    print(sum)
    print(arr[0])
