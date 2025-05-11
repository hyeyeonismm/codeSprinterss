N= int(input()) # 숫자 개수 입력받기
data = list(map(int, input().split())) # 숫자 리스트 입력받기
count = 0

for x in data:  # 리스트의 각 숫자에 대해 검사
    for i in range(2, x + 1):  # 2부터 자기 자신까지 나눠보기
        if x % i == 0: # x가 i로 나누어 떨어진다면
            if x == i: # 자기 자신과 같을 때
                count += 1
            break
print(count)