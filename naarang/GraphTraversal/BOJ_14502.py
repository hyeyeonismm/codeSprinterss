from itertools import combinations


n, m = list(map(int, input().split(" ")))
board = []

for _ in range(n):
    board.append(list(map(int, input().split(" "))))

empty = []
virus = []


for x in range(n):
    for y in range(m):
        if board[x][y] == 2:
            virus.append((x, y))
        elif board[x][y] == 0:
            empty.append((x, y))

cases = list(combinations(empty, 3))

def DFS():
    visited = [[False] * m for _ in range(n)]
    dx = [0, 1, 0, -1]
    dy = [1, 0, -1, 0]
    
    for i, j in virus:
        if visited[i][j] == True:
            continue
    
        stack = []
        stack.append((i, j))
        visited[i][j] = True
        
        while len(stack) > 0:
            x, y = stack.pop()
                
    
            for direction in range(4):
                nx = x + dx[direction]
                ny = y + dy[direction]
    
                if 0 <= nx < n and 0 <= ny < m and visited[nx][ny] == False and board[nx][ny] != 1:
                    visited[nx][ny] = True
                    stack.append((nx, ny))

    result = 0
    for i in range(n):
        for j in range(m):
            if visited[i][j] == False and board[i][j] == 0:
                result += 1
    return result

answer = 0
for i in range(len(cases)):
    for j in range(3):
        prev_x, prev_y = cases[i][j]
        board[prev_x][prev_y] = 1

    result = DFS()
    answer = max(answer, result)
    
    # 원상복귀
    for j in range(3):
        prev_x, prev_y = cases[i][j]
        board[prev_x][prev_y] = 0

print(answer)
    
# 새 벽 3개를 어디다가 놓을지가 관건! 지도의 개수가 최대 8까지 밖에 안되는 것을 보니깐 남은 칸 중에서 3개를 뽑아서 세우고 길이를 측정해서 최소값을 구하자 -> 조합 사용

