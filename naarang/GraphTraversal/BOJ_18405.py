from collections import deque

n, k = list(map(int, input().split(" ")))
board = []
for _ in range(n):
    board.append(list(map(int, input().split(" "))))
s, x, y = list(map(int, input().split(" ")))

answer = board[x - 1][y - 1]
viruses = dict()

for i in range(n):
    for j in range(n):
        if board[i][j] > 0:
            if board[i][j] not in viruses:
                viruses[board[i][j]] = deque()
            viruses[board[i][j]].append((i, j))

def bfs(max_time, target_x, target_y):
    global answer
    now_time = 0

    dx = [0, 1, 0, -1]
    dy = [1, 0, -1, 0]
    while now_time < max_time:
        now_time += 1

        for i in range(1, k + 1):
            if i not in viruses:
                continue
            prev_length = len(viruses[i])
            for _ in range(prev_length):
                x, y = viruses[i].popleft()

                for direction in range(4):
                    nx = x + dx[direction]
                    ny = y + dy[direction]

                    if 0 < nx < n and 0 < ny < n and board[nx][ny] == 0:
                        board[nx][ny] = i
                        viruses[i].append((nx, ny))

                        if nx == target_x and ny == target_y:
                            answer = i
                            return

if answer == 0:
    bfs(s, x - 1, y - 1)

print(answer)

# 바이러스 종류별로 퍼뜨리는 게 맞을까? -> 방문했던 곳을 방문하지 않도록! deque를 바이러스 종류 별로 dict()로 관리