from collections import deque

n = int(input())
k = int(input())

x = 0
y = 0
dx = [0, 1, 0, -1]
dy = [1, 0, -1, 0]

direction_index = 0
now_time = 0

snake = deque([[0, 0]])
board = [[0] * n for _ in range(n)] # 0 : 빈칸, 1 : 뱀, 2: 사과
board[0][0] = 1

for i in range(2, 2 + k):
    apple_x, apple_y = map(int, input().split(" "))
    board[apple_x - 1][apple_y - 1] = 2

l = int(input())

def moveSnake(time): 
    global x
    global y
    global now_time
    global direction_index

    for i in range(now_time, time):
        now_time += 1
        nx = x + dx[direction_index]
        ny = y + dy[direction_index]

        if nx < 0 or nx >= n or ny < 0 or ny >= n or board[nx][ny] == 1:
            return False
        elif board[nx][ny] == 0:
            # 꼬리를 기억하고 제거해야 함! 큐 사용
            tail_x, tail_y = snake.popleft()
            board[tail_x][tail_y] = 0 

        board[nx][ny] = 1
        snake.append([nx, ny])
            
        x = nx
        y = ny
    return True

isEnd = False

for i in range(2 + k + 1, 2 + k + 1 + l):
    time, direction = input().split(" ")

    if moveSnake(int(time)) == False: # x초 동안 뱀 움직이기
        isEnd = True
        break
    # 방향 바꾸기
    if direction == 'L':
        if direction_index == 0:
            direction_index = 3
        else:
            direction_index -= 1
    elif direction == 'D':
        direction_index = ( direction_index + 1 ) % 4

while isEnd == False:
    if moveSnake(now_time + 1) == False: # x초 동안 뱀 움직이기
        break

print(now_time)