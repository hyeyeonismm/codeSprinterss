n = int(input()) # 숫자의 개수
numbers = input() # 숫자 문자열 입력

total = 0 # 합계를 저장할 변수
for char in numbers:
    total += int(char) # 문자를 정수로 변환하여 합산

print(total)