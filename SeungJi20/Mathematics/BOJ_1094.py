X = int(input())
count = 0
stick = 64 # 제일 긴 길이

while X > 0:
    if X >= stick:
        X -= stick
        count += 1
    stick //= 2 # 막대기 반으로 자르기

print(count)