# 입력 받기
n = int(input())  # 숫자의 개수
numbers = [int(input()) for _ in range(n)]  # n개의 숫자 입력받기

# 오름차순 정렬
sorted_numbers = sorted(numbers)

# 결과 출력
for result in sorted_numbers:
    print(result)