from collections import deque

def solution(maps):
    answer = -1
    
    n = len(maps)
    m = len(maps[0])
    
    dx = [0, 1, 0, -1]
    dy = [1, 0, -1, 0]
    
    def bfs(x, y):
        nonlocal answer
        visited = [[False] * m for _ in range(n)]
        queue = deque()
        queue.append((x, y, 1))
        visited[x][y] = True
        
        while len(queue) > 0:
            start_x, start_y, depth = queue.popleft()
            
            if start_x == n - 1 and start_y == m - 1:
                answer = depth
                return
            
            for i in range(4):
                nx = dx[i] + start_x
                ny = dy[i] + start_y
                
                if 0 <= nx < n and 0 <= ny < m and maps[nx][ny] == 1 and visited[nx][ny] == False:
                    visited[nx][ny] = True
                    queue.append((nx, ny, depth + 1))
            
        
    bfs(0, 0)
        
    return answer