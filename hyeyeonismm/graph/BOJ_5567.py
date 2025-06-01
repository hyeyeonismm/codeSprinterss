import sys
from collections import deque

n = int(sys.stdin.readline())
m = int(sys.stdin.readline())

visited = [False]* (n+1)
graph=[[] for _ in range(n+1)]

for _ in range(m):
    a, b = map(int, sys.stdin.readline().split())
    graph[a].append(b)
    graph[b].append(a)

dq = deque([(1, 0)])
visited[1]=True
ans=[]
while dq:
    v = dq.popleft()
    cnt = v[1]+1
    ans.append(v)
    for i in graph[v[0]]:
        if not visited[i]:
            dq.append((i,cnt))
            visited[i]=True

ans_cnt=0
for node, idx in ans:
    if idx >0 and idx <3:
        ans_cnt+=1
    
print(ans_cnt)