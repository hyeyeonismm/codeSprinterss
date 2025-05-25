import sys
from collections import deque

n, m = map(int, sys.stdin.readline().split())
res={i:0 for i in range(1,n+1)}
dic = {i:[] for i in range(1, n+1)}

for i in range(m):
    a, b = map(int, sys.stdin.readline().split())
    dic[b].append(a)

def bfs(i):
    visited=[False] * (n+1)
    queue = deque([i])
    
    while queue:
        s = queue.popleft() 
        
        for i in dic[s]: 
            if not visited[i]:
                visited[i]=True  
                queue.append(i)
    
    return visited.count(True)

for i in range(1, n+1):
    res[i] = bfs(i)

sorted_res = sorted(res.items(), key=lambda x: -x[1])
max_val = sorted_res[0][1]

for i in sorted_res:
    if i[1] == max_val:
        print(i[0], end=' ')

# {1: [3], 2: [3], 3: [4, 5], 4: [], 5: []}