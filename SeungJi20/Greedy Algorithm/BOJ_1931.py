import sys

N = int(sys.stdin.readline()) # 회의 개수
meetings = []

for _ in range(N):
    start, end = map(int, sys.stdin.readline().split())
    meetings.append((start, end))
    
# 종료 시간을 기준으로 정렬하고, 종료 시간이 같으면 시작 시간이 빠른 순으로
meetings.sort(key=lambda x: (x[1], x[0]))

count = 0
current_end = 0 # 현재 회의가 끝나는 시간

for start, end in meetings:
    if start >= current_end:
        count += 1
        current_end = end
        
print(count)