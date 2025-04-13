T = int(input())

for _ in range(T):
    answer = input() # 문자열 입력
    count = 0 # 누적 'O'개수 저장용 변수
    total = 0 # 점수 저장용 변수

    for ch in answer:
        if ch == 'O':
            count += 1
            total += count
        else:
            count = 0  # X가 나오면 'O'개수는 0으로 초기화

    print(total)
