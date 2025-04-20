# 7: 00
n, l, r = list(map(int, input().split(" ")))
countries = []
for _ in range(n):
    countries.append(list(map(int, input().split(" "))))

dx = [0, 1, 0, -1]
dy = [1, 0, -1, 0]

answer = 0


def dfs(start_x, start_y):
    stack = [(start_x, start_y)] 
    group = [(start_x, start_y)]
    visited[start_x][start_y] = True

    while len(stack) > 0:
        x, y = stack.pop()
            
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if nx < 0 or nx >= n or ny < 0 or ny >= n or visited[nx][ny] == True:
                continue

            # 차이 측정
            deference = abs(countries[x][y] - countries[nx][ny])
            if l <= deference <= r:
                visited[nx][ny] = True
                stack.append((nx, ny))
                group.append((nx, ny))

    return group

while True:
    visited = [[False] * n for _ in range(n)]
    groups = []
    for i in range(n):
        for j in range(n):
            if visited[i][j] == False:
                result = dfs(i, j)
                if len(result) > 1:
                    groups.append(result)

    if len(groups) == 0:
        break

    # 인구 이동
    for i in range(len(groups)):
        total = 0
        for j in range(len(groups[i])):
            target_x, target_y = groups[i][j]
            total += countries[target_x][target_y]
        new_people = total // len(groups[i])
        for j in range(len(groups[i])):
            target_x, target_y = groups[i][j]
            countries[target_x][target_y] = new_people

    answer += 1

print(answer)


                
    