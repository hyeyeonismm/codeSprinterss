# 사람 수 입력
n = int(input())

# 시간 입력
times = list(map(int, input().split()))

# 시간을 오름차순으로 정렬
times.sort()

# 총 대기 시간 계산
total_time = 0
current_time = 0

# 각 사람이 돈을 인출하는 시간 누적 계산
for time in times:
    current_time += time
    total_time += current_time

# 결과 출력
print(total_time)