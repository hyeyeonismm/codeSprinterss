N = int(input())
num = 666 # 666이 첫 숫자자

count = 0
while True:
    if "666" in str(num): # num을 문자열로 바꿔서 '666'이 들어있는지 확인인
        count += 1
        if count == N: # N번째면 출력하고 끝
            print(num)
            break
    num += 1 # 아니면 숫자 하나 늘려서 다시 확인
