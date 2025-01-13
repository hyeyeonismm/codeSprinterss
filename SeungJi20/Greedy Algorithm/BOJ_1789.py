s = int(input())
total = 0  # 현재까지 더한 합
count = 0  # 더한 숫자

while True:
    count += 1  # 더할 숫자 1 증가
    total += count  # 해당 숫자를 현재 합에 더함
    
    # 초과하면 종료
    if total > s:
        break

# 직전 값 출력
print(count - 1)
