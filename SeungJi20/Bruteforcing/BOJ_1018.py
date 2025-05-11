# N: 세로 크기, M: 가로 크기
N, M = map(int, input().split())

# 주어진 체스판을 입력받음
board = [input() for _ in range(N)]

# 변경 횟수를 기록할 리스트
change_counts = []

# 8x8 크기의 모든 부분체스판을 확인
for row in range(N - 7):
    for col in range(M - 7):
        count_w = 0 # W로 시작하는 체스판의 변경 횟수
        count_b = 0 # B로 시작하는 체스판의 변경 횟수

        # 8x8 영역을 순차적으로 확인
        for i in range(row, row + 8):
            for j in range(col, col + 8):
                # (i + j) % 2 == 0이면, 짝수번째 칸
                if (i + j) % 2 == 0:
                    # W로 시작하는 체스판은 해당 칸이 W여야 하므로, 다르면 횟수 증가
                    if board[i][j] != 'W':
                        count_w += 1
                    # B로 시작하는 체스판은 해당 칸이 B여야 하므로, 다르면 횟수 증가
                    if board[i][j] != 'B':
                        count_b += 1
                else:
                    # 홀수번째 칸은 W로 시작하는 체스판에서는 B여야 하고, B로 시작하는 체스판에서는 W여야 함
                    if board[i][j] != 'B':
                        count_w += 1
                    if board[i][j] != 'W':
                        count_b += 1

        # 해당 8x8 부분체스판에서 최소 변경 횟수 기록
        change_counts.append(min(count_w, count_b))

# 변경 횟수가 최소인 값을 출력
print(min(change_counts))