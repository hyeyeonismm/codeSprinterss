n = int(input())  # 좌표의 개수 입력
points = []  # 좌표들을 저장할 빈 리스트

# 좌표 입력 받기
for _ in range(n):
    x, y = map(int, input().split())  # x, y 좌표 입력
    points.append((x, y))  # 튜플로 리스트에 추가

# 정렬
points.sort()  # 기본적으로 튜플은 (x, y) 순서대로 정렬됨

# 정렬된 좌표 출력
for result in points:
    print(result[0], result[1])
